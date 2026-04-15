import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import MainCard from './MainCard';
import { TimelineContext } from '../../../Context/CreateContent';
import ShowDate from '../../ShowDate/ShowDate';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { friend } = useLoaderData();
    const navigate = useNavigate();

    const { interactionType, setInteractionType } = useContext(TimelineContext);

    const handleClick = (type) => {
        //alert(`You chose to ${type} ${friend.name}`);
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