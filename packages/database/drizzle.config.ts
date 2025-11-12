import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { keys } from './keys';

export default defineConfig({
  out: './drizzle',
  schema: './schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: keys().DATABASE_URL!,
  },
});
