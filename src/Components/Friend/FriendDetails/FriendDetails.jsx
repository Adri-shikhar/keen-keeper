import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MainCard from './MainCard';
import { TimelineContext } from '../../../Context/CreateContent';
import ShowDate from '../../ShowDate/ShowDate';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { friend } = useLoaderData();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const { interactionType, setInteractionType } = useContext(TimelineContext);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 border-3 border-teal-200 border-t-teal-700 rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    const handleClick = (type) => {
        toast.success(`You chose to ${type} ${friend.name}`, {
            position: "top-right",
            autoClose: 3000,
        });

        const { date, time } = ShowDate.getDhakaDateTime();
        const Interaction_data = {
            type,
            friendName: friend.name,
            currentDhakaDate: date,
            currentDhakaTime: time,
        };
        setInteractionType([...interactionType, Interaction_data]);
    };
    console.log('interactionType:', interactionType);

    const handleBack = () => {
        navigate('/');
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'No date';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header with back button */}
                <div className="mb-6 flex justify-end">
                    <button
                        onClick={handleBack}
                        className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                    >
                        ← Back
                    </button>
                </div>

                <MainCard friend={friend} formatDate={formatDate} handleClick={handleClick} />
            </div>
        </div>
    );
};

export default FriendDetails;