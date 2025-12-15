// lib/postgres.js
import { Client } from 'pg';

const POSTGRES_URL = process.env.NETLIFY_DB_CONNECTION_STRING;

export function getPostgresClient() {
  if (!POSTGRES_URL) {
    throw new Error('Missing NETLIFY_DB_CONNECTION_STRING environment variable');
  }
  return new Client({ connectionString: POSTGRES_URL });
}
