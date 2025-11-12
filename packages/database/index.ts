import 'server-only';

import { drizzle } from 'drizzle-orm/node-postgres';
import { keys } from './keys';

export const database = drizzle(keys().DATABASE_URL);