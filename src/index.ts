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
