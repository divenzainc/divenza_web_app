'use client';

import Footer from '@/components/Footer';
import FloatingHelp from '@/components/FloatingHelp';
import Navbar from '@/components/Navbar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
            <FloatingHelp />
        </div>
    );
}