import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = Number(process.env.PORT || 5000);

app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
  })
);
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'RVIT ERP backend is running',
    data: { name: 'RVIT ERP API', timestamp: new Date().toISOString() }
  });
});

app.get('/', (_req: Request, res: Response) => {
  res.send('RVIT ERP API ready');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
