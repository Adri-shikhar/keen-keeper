import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MainCard from './MainCard';

const FriendDetails = () => {
    const loaderData = useLoaderData();
    const friend = loaderData?.friend ?? loaderData;
    const navigate = useNavigate();

    const [interactionType, setInteractionType] = useState([]);

    const handleClick = (type) => {
        alert(`You chose to ${type} ${friend.name}`);
        setInteractionType([...interactionType, type, friend.name]);
    };
    console.log('interactionType:', interactionType);

    const handleBack = () => {
        navigate('/');
    };

    //formatDate
    const formatDate = (dateString) => {
        if (!dateString) return 'No date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header with back button */}
                <button
                    onClick={handleBack}
                    className="mb-6 text-gray-600 hover:text-gray-900 font-medium text-sm"
                >
                    ← Back
                </button>

                <MainCard friend={friend} formatDate={formatDate} handleClick={handleClick} />
            </div>
        </div>
    );
};

export default FriendDetails;