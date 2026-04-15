import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2 } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Navbar = () => {

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]);

    return (
        <nav className="hidden md:block bg-white shadow-md px-8 py-4">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <Link to="/" className="text-xl font-semibold text-gray-800">
                    KeenKeeper
                </Link>
                <div className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) => isActive ? 'flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded font-semibold transition-colors' : 'flex items-center gap-2 text-gray-700 hover:text-teal-700 transition-colors'}
                    >
                        <FiHome size={18} />
                        Home
                    </NavLink>
                    <NavLink
                        to="/timeline"
                        className={({ isActive }) => isActive ? 'flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded font-semibold transition-colors' : 'flex items-center gap-2 text-gray-700 hover:text-teal-700 transition-colors'}
                    >
                        <FiClock size={18} />
                        Timeline
                    </NavLink>
                    <NavLink
                        to="/stats"
                        className={({ isActive }) => isActive ? 'flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded font-semibold transition-colors' : 'flex items-center gap-2 text-gray-700 hover:text-teal-700 transition-colors'}         >
                        <FiBarChart2 size={18} />
                        Stats
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;