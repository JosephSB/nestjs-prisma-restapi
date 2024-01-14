import 'dotenv/config';

export default {
  PORT: process.env.PORT ? Number(process.env.PORT) : 5000,
  ENV: process.env.ENV ? process.env.ENV : 'dev',
  JWT_SEED: process.env.JWT_SEED ? process.env.JWT_SEED : 'SEED',
  JWT_TOKEN_DUR: process.env.JWT_TOKEN_DUR ? process.env.JWT_TOKEN_DUR : '24h',
};
