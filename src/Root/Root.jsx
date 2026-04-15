import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import MobileNavbar from '../Components/Navbar/MobileNavbar';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <MobileNavbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Root;