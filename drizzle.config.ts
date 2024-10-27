import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './app/db/schema.server.ts',
  dialect: 'sqlite',
});
