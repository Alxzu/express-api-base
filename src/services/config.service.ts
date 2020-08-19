import * as dotenv from 'dotenv';

dotenv.config();

// If .env wasn't provided then exit
if (!process.env.PORT) {
  console.error('==> Please check your .env');
  process.exit(1);
}

export const {
  PORT,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DATABASE_PASSWORD,
} = process.env;
