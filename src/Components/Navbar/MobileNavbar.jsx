import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiClock, FiBarChart2, FiMenu, FiX } from 'react-icons/fi';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? 'flex items-center gap-2 px-3 py-2 bg-teal-700 text-white rounded font-semibold'
            : 'flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded';

    return (
        <nav className="md:hidden bg-white shadow-md">
            <div className="flex items-center justify-between px-4 py-4">
                <Link to="/" className="text-lg font-semibold text-gray-800">
                    KeenKeeper
                </Link>
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 hover:text-teal-700"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="px-4 pb-4 space-y-2 border-t border-gray-200">
                    <NavLink
                        to="/"
                        end
                        className={navLinkClass}
                        onClick={() => setIsOpen(false)}
                    >
                        <FiHome size={18} />
                        <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/timeline"
                        className={navLinkClass}
                        onClick={() => setIsOpen(false)}
                    >
                        <FiClock size={18} />
                        <span>Timeline</span>
                    </NavLink>
                    <NavLink
                        to="/stats"
                        className={navLinkClass}
                        onClick={() => setIsOpen(false)}
                    >
                        <FiBarChart2 size={18} />
                        <span>Stats</span>
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default MobileNavbar;
