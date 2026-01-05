import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', logger(console.log));
app.use('*', cors());

const prefix = 'product_list_52dd9b5e';

// Route to get all products
app.get('/make-server-52dd9b5e/products', async (c) => {
  try {
    const products = await kv.get(prefix);
    return c.json(products || []);
  } catch (err: any) {
    console.error('Error in GET /products:', err);
    return c.json({ error: err.message }, 500);
  }
});

// Route to update/save products
app.post('/make-server-52dd9b5e/products', async (c) => {
  try {
    const body = await c.req.json();
    const { products } = body;
    
    if (!Array.isArray(products)) {
      return c.json({ error: 'Invalid products data' }, 400);
    }

    await kv.set(prefix, products);
    return c.json({ success: true });
  } catch (err: any) {
    console.error('Error in POST /products:', err);
    return c.json({ error: err.message }, 500);
  }
});

Deno.serve(app.fetch);