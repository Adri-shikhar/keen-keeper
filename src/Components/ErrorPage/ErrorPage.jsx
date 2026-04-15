import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-white gap-4">
            <h1 className="text-5xl font-bold text-gray-800">404</h1>
            <p className="text-gray-600">Page not found</p>
            <Link to="/" className="mt-2 px-4 py-2 bg-teal-700 text-white rounded">
                Home
            </Link>
        </div>
    );
};

export default ErrorPage;
