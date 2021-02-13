import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, SECRET_KEY, EXPIRATION_DURATION } = process.env;

export { DATABASE_URL, SECRET_KEY, EXPIRATION_DURATION };