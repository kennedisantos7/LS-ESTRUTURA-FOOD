import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/common/WhatsAppButton';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-dark text-white font-sans selection:bg-gold selection:text-dark">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default MainLayout;
