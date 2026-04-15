import React from 'react';
import { MdSnooze, MdArchive, MdDelete } from 'react-icons/md';
import RightColumn from './RightColumn';

const MainCard = ({ friend, formatDate, handleClick }) => {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
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

                <RightColumn friend={friend} formatDate={formatDate} handleClick={handleClick} />
            </div>
        </div>
    );
};

export default MainCard;
