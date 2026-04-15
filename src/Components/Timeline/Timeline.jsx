import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../Context/CreateContent';
import { MdCall, MdMessage, MdVideocam, MdMic, MdHandshake } from 'react-icons/md';

const Timeline = () => {
    const { interactionType } = useContext(TimelineContext);
    const [filterType, setFilterType] = useState('all');

    const getIcon = (type = '') => {
        const normalizedType = type.toLowerCase();

        if (normalizedType === 'text' || normalizedType === 'message') {
            return <MdMessage className="text-2xl text-slate-600" />;
        }
        if (normalizedType === 'call') {
            return <MdCall className="text-2xl text-slate-600" />;
        }
       
        if (normalizedType === 'video') {
            return <MdVideocam className="text-2xl text-slate-600" />;
        }
        return <MdHandshake className="text-2xl text-slate-600" />;
    };

    const sortedItems = () => {
        let items = [...interactionType];

        // Filter by type
        if (filterType !== 'all') {
            items = items.filter(item => item.type.toLowerCase() === filterType.toLowerCase());
        }

        // Sort by date (newest first)
        items.sort((a, b) => {
            const aStr = a.currentDhakaDate + a.currentDhakaTime;
            const bStr = b.currentDhakaDate + b.currentDhakaTime;

            if (bStr > aStr) {
                return 1;
            } else if (aStr > bStr) {
                return -1;
            } else {
                return 0;
            }
        });

        return items;
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-4xl font-bold text-slate-800 mb-6">Timeline</h1>

                <div className="mb-4">
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                    >
                        <option value="all">Sort with date</option>
                        <option value="call">Sort with call</option>
                        <option value="video">Sort with video</option>
                        <option value="text">Sort with text</option>
                    </select>
                </div>

                <div className="space-y-3">
                    {interactionType.length === 0 ? (
                        <div className="rounded-md border border-gray-200 bg-white p-4 text-sm text-gray-500">
                            No timeline activity yet.
                        </div>
                    ) : (
                        sortedItems().map((item, index) => (
                            <div
                                key={index}
                                className="rounded-md border border-gray-200 bg-white px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                    {getIcon(item.type)}
                                </div>

                                <div>
                                    <p className="text-sm text-slate-700">
                                        <span className="font-semibold">{item.type}</span> with {item.friendName}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {item.currentDhakaDate} at {item.currentDhakaTime}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;