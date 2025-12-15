import { getPostgresClient } from './postgres.js';

import { getPostgresClient } from './postgres.js';

export async function getMeals() {
  const client = getPostgresClient();
  await client.connect();
  const res = await client.query('SELECT * FROM meals');
  await client.end();
  return res.rows;
}

export async function getMeal(slug) {
  const client = getPostgresClient();
  await client.connect();
  const res = await client.query('SELECT * FROM meals WHERE slug = $1', [slug]);
  await client.end();
  return res.rows[0];
}
