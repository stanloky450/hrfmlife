'use client';

import { SessionProvider } from 'next-auth/react';
import AdminHeader from '@/components/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <AdminHeader />
        {children}
      </div>
    </SessionProvider>
  );
}
