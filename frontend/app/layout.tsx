import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RVIT ERP',
  description: 'Enterprise Resource Planning system for RV Institute of Technology'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
