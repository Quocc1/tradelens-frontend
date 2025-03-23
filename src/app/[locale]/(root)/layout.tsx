import type React from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { ClerkProvider } from '@clerk/nextjs';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const afterSignOutUrl = '/';

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  return (
    <ClerkProvider
      afterSignOutUrl={afterSignOutUrl}
    >
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </ClerkProvider>
  );
};

export default DashboardLayout;
