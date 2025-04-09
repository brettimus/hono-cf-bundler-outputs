This folder contains the built output assets for the worker "hono-cf-bundle-test" generated at 2025-04-09T09:55:35.532Z.

***

This is the output of a build of the starter Hono template with a Cloudflare D1 database binding.

> **NOTE** - Enabling the D1 binding does not change the output! Since the binding is assumed to be bound by the runtime on the `env` object, it is not included in the bundle.

```typescript
import { Hono } from 'hono'

type Bindings = {
  MY_DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/db', async (c) => {
  const result = await c.env.MY_DB.exec('SELECT 1')
  return c.json({
    resultCount: result.count
  })
})

export default app
```