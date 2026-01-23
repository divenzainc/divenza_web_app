'use client';

import Navbar from '@/components/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-20">{children}</main>
        </div>
    );
}