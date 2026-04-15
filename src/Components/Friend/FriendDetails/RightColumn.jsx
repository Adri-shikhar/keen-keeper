import React from 'react';
import { MdCall, MdMessage, MdVideoCall } from 'react-icons/md';

const RightColumn = ({ friend, formatDate, handleClick }) => {
    return (
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
    );
};

export default RightColumn;
