import { config } from 'dotenv';

config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  databaseUrl: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/rvit_erp',
  jwtSecret: process.env.JWT_SECRET || 'development-secret',
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET || 'development-refresh-secret',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  backendUrl: process.env.BACKEND_URL || 'http://localhost:5000'
};
