import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-teal-700 text-white h-[413px] flex items-center">
            <div className="w-full max-w-[1600px] mx-auto px-8 py-8">
                {/* Main Content */}
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold mb-2">KeenKeeper</h1>
                    <p className="text-gray-100 max-w-2xl mx-auto mb-6 text-sm">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    {/* Social Links */}
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold mb-3">Social Links</h3>
                        <div className="flex justify-center gap-4">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-colors"
                                aria-label="Instagram"
                            >
                                <FiInstagram size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-colors"
                                aria-label="Facebook"
                            >
                                <FiFacebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center border-2 border-white rounded-full hover:bg-white hover:text-teal-700 transition-colors"
                                aria-label="Twitter"
                            >
                                <FiTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-teal-600 my-4"></div>

                {/* Footer Bottom */}
                <div className="flex justify-between items-center">
                    <p className="text-gray-200 text-xs">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-xs">
                        <a href="#" className="text-gray-200 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-200 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-200 hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;