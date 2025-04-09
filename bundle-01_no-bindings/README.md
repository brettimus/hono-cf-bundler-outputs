This folder contains the built output assets for the worker "hono-cf-bundle-test" generated at 2025-04-09T09:47:39.921Z.

This is a basic bundle, of a simple Hono app. No bindings.


```typescript
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app

```