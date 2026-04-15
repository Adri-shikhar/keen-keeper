import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { MdSnooze, MdArchive, MdDelete, MdCall, MdMessage, MdVideoCall } from 'react-icons/md';
import { useState } from 'react';

const FriendDetails = () => {
    const friend = useLoaderData();
    const navigate = useNavigate();

    const [interactionType, setInteractionType] = useState([]);

    const  handleClick = (type) => {
        alert(`You chose to ${type} ${friend.name}`);
        setInteractionType([...interactionType, type,friend.name]);
    } 
    console.log('interactionType:', interactionType);


    if (!friend) {
        return <div className="text-center p-8">Friend not found</div>;
    }

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

                {/* Main Card */}
                <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">

                        {/* Left Column */}
                        <div className="md:col-span-1 space-y-3">
                            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                                <div className="flex flex-col items-center text-center">
                                    {friend.picture ? (
                                        <img
                                            src={friend.picture}
                                            alt={friend.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                                            <span className="text-gray-600 text-lg font-bold">
                                                {friend.name?.charAt(0) || '?'}
                                            </span>
                                        </div>
                                    )}

                                    <h1 className="text-base font-bold text-gray-900 mt-3 mb-2">
                                        {friend.name}
                                    </h1>

                                    <div className="flex flex-wrap justify-center gap-1 mb-2">
                                        {friend.status && (
                                            <span className="badge badge-xs badge-error text-white border-0">{friend.status}</span>
                                        )}
                                        {friend.tags && friend.tags.length > 0 && (
                                            <span className="badge badge-xs badge-success text-white border-0 uppercase">{friend.tags[0]}</span>
                                        )}
                                    </div>

                                    <p className="text-gray-500 text-xs italic line-clamp-2 mb-1">
                                        "{friend.bio || 'No quote added'}"
                                    </p>
                                    <p className="text-gray-400 text-[11px]">Preferred: email</p>
                                </div>
                            </div>

                            <button className="w-full h-9 flex items-center justify-center gap-2 rounded border border-gray-300 bg-white text-gray-700 text-xs font-medium hover:bg-gray-50 transition">
                                <MdSnooze className="text-sm shrink-0" />
                                Snooze 2 Weeks
                            </button>
                            <button className="w-full h-9 flex items-center justify-center gap-2 rounded border border-gray-300 bg-white text-gray-700 text-xs font-medium hover:bg-gray-50 transition">
                                <MdArchive className="text-sm shrink-0" />
                                Archive
                            </button>
                            <button className="w-full h-9 flex items-center justify-center gap-2 rounded border border-red-300 bg-white text-red-500 text-xs font-medium hover:bg-red-50 transition">
                                <MdDelete className="text-sm shrink-0" />
                                Delete
                            </button>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-4 space-y-3">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-center">
                                    <p className="text-4xl leading-none font-bold text-emerald-800">{friend.days_since_contact}</p>
                                    <p className="text-xs text-gray-500 mt-2">Days Since Contact</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-center">
                                    <p className="text-4xl leading-none font-bold text-emerald-800">{friend.goal || 30}</p>
                                    <p className="text-xs text-gray-500 mt-2">Goal (Days)</p>
                                </div>
                                <div className="rounded-md border border-gray-200 bg-gray-50 p-4 text-center">
                                    <p className="text-3xl leading-none font-bold text-emerald-800">{formatDate(friend.next_due_date)}</p>
                                    <p className="text-xs text-gray-500 mt-2">Next Due</p>
                                </div>
                            </div>

                            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-lg font-semibold text-gray-800">Relationship Goal</h2>
                                    <button className="h-7 px-3 rounded border border-gray-300 bg-white text-xs text-gray-600 hover:bg-gray-100 transition">
                                        Edit
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Connect every <span className="font-semibold text-gray-800">{friend.goal || 30} days</span>
                                </p>
                            </div>

                            <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                                <h2 className="text-2xl md:text-lg font-semibold text-gray-800 mb-3">Quick Check-In</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <button onClick={() => handleClick('call')} className="h-20 rounded border border-gray-300 bg-white hover:bg-gray-100 transition flex flex-col items-center justify-center gap-1 text-gray-700">
                                        <MdCall className="text-2xl" />
                                        <span className="text-sm">Call</span>
                                    </button>
                                    <button onClick={() => handleClick('text')} className="h-20 rounded border border-gray-300 bg-white hover:bg-gray-100 transition flex flex-col items-center justify-center gap-1 text-gray-700">
                                        <MdMessage className="text-2xl" />
                                        <span className="text-sm">Text</span>
                                    </button>
                                    <button onClick={() => handleClick('video')} className="h-20 rounded border border-gray-300 bg-white hover:bg-gray-100 transition flex flex-col items-center justify-center gap-1 text-gray-700">
                                        <MdVideoCall className="text-2xl" />
                                        <span className="text-sm">Video</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;