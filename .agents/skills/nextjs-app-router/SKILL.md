---
name: nextjs-app-router
description: Next.js App Router patterns
---

# Next.js 16 App Router - Production Corrections Skill
**Version**: Next.js 16.1+
**React**: 19.2+
**Focus**: Prevent outdated AI patterns and enforce modern App Router correctness.



# When To Use

Use this skill when working with:

* Next.js App Router
* Server Components
* Server Actions
* Caching
* Route Handlers
* Rendering strategies
* React Server Components
* Next.js migrations
* Suspense/streaming
* Turbopack

---

# Purpose

AI models frequently generate:

* outdated Next.js 14/15 patterns
* incorrect caching behavior
* excessive client components
* broken async params handling
* invalid App Router architecture
* unnecessary API routes
* incorrect server/client boundaries

This skill corrects those issues.

---

# Core Next.js 16 Corrections

## Async Route Params (BREAKING)

Next.js 16 route params are async.

```tsx
// ❌ OLD PATTERN
export default function Page({ params }: {
  params: { id: string }
}) {
  return <div>{params.id}</div>
}

// ✅ CORRECT
export default async function Page({ params }: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <div>{id}</div>
}
```

Applies to:

* params
* searchParams
* cookies()
* headers()
* draftMode()

---

## cookies() and headers() are Async

```tsx
// ❌ OLD
const cookieStore = cookies()
const headersList = headers()

// ✅ CORRECT
const cookieStore = await cookies()
const headersList = await headers()
```

---

# Server Components

## Default To Server Components

Prefer Server Components by default.

Only use `"use client"` when:

* using hooks
* browser APIs
* event handlers
* local interactive state

Avoid turning entire pages into client components.

---

## Avoid Fetching Internal APIs In Server Components

```tsx
// ❌ BAD
await fetch('/api/posts')

// ✅ GOOD
await db.query.posts.findMany()
```

Call server/database logic directly.

---

# Server Actions

## Prefer Server Actions For Internal Mutations

Prefer Server Actions over API routes unless:

* external integrations need endpoints
* public APIs are required
* webhooks are needed

```tsx
'use server'

export async function createPost(formData: FormData) {
  // mutation logic
}
```

---

# Caching

## Next.js 16 Uses Opt-In Caching

Do NOT assume fetches are cached.

Use:

```tsx
'use cache'
```

for expensive reusable server computations.

---

## revalidateTag Requires 2 Arguments

```tsx
// ❌ OLD
revalidateTag('posts')

// ✅ CORRECT
revalidateTag('posts', 'max')
```

---

## updateTag()

Use `updateTag()` for read-after-write behavior where users expect immediate fresh data.

Use `revalidateTag()` for stale-while-revalidate behavior.

---

## Prefer Simpler Cache Strategies

Avoid overengineering cache systems.

Default to:

* dynamic rendering first
* add caching intentionally
* tag-based invalidation
* minimal cache layers

---

# Parallel Routes

## default.tsx Required

Parallel routes require `default.tsx`.

```text
app/
├── @modal/
│   ├── login/page.tsx
│   └── default.tsx
```

```tsx
export default function Default() {
  return null
}
```

---

# proxy.ts Replaces middleware.ts

Use:

```text
proxy.ts
```

instead of:

```text
middleware.ts
```

---

# Rendering Strategy

Prefer:

* Server Components
* async rendering
* Suspense
* streaming
* partial prerendering compatible patterns

Avoid:

* excessive client boundaries
* unnecessary dynamic rendering
* overusing useEffect
* deeply nested client fetching

---

# Route Handlers

Use Route Handlers only when:

* public API needed
* webhook endpoint needed
* external integrations required

Avoid using Route Handlers for internal app mutations.

---

# Turbopack

Turbopack is stable in Next.js 16.

But watch for:

* Prisma incompatibilities
* monorepo hash issues
* production source map exposure

If unstable:

```bash
npm run build -- --webpack
```

---

# React 19 Guidance

Prefer:

* async rendering
* transitions
* Suspense
* server-first patterns

Avoid:

* excessive memoization
* unnecessary useMemo/useCallback
* giant client state trees

---

# Common AI Failure Corrections

## Wrong

```tsx
params.id
cookies()
headers()
revalidateTag('x')
middleware.ts
fetch('/api/internal')
```

## Correct

```tsx
await params
await cookies()
await headers()
revalidateTag('x', 'max')
proxy.ts
direct DB/server access
```

---

# Architecture Guidance

Prefer:

* fewer client components
* colocated logic
* direct server access
* small composable components
* server-first rendering

Avoid:

* giant monolithic pages
* excessive global state
* API route overuse
* duplicated validation
* unnecessary abstractions

---

# Token Efficiency

## Goal

Prevent AI from wasting tokens on:

* outdated Next.js patterns
* obsolete App Router behavior
* incorrect cache assumptions
* repeated migration debugging
* unnecessary client-side architecture

---

## Estimated Savings

Without skill:

* repeated debugging
* outdated generations
* migration mistakes
* incorrect caching
* rendering architecture drift

Estimated correction overhead:

```text
20k–40k+ tokens/project
```

With skill:

```text
5k–10k tokens/project
```

Estimated savings:

```text
~65–75%
```

---

# Recommended Pairing

Best combined with:

* AGENTS.md
* Next.js MCP
* shadcn MCP
* Better Auth MCP
* Neon MCP

---

# Mental Model

Use:

```text
AGENTS.md -> architecture constraints
SKILL.md -> framework corrections
MCP -> runtime/docs awareness
```

---


# Requirements

Authentication architecture requirements:

* Use server-side session validation for protected pages/layouts
* Do NOT use middleware/proxy-based auth protection
* Use App Router server components/layouts for auth checks
* Redirect unauthenticated users server-side
* Prefer protected layout pattern

Example approach:

```tsx
const session = await auth.api.getSession(...)

if (!session) {
  redirect("/login")
}
```

Apply protection at:

```txt
app/(dashboard)/layout.tsx
```

so all nested routes are protected automatically.




# Final Rules

* Prefer framework-native patterns.
* Prefer simpler architecture first.
* Preserve server/client boundaries carefully.
* Avoid unnecessary client rendering.
* Keep rendering and caching intentional.
* Stay compatible with latest stable Next.js patterns.
