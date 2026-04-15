import React from 'react';
import { Link } from 'react-router-dom';

const getStatusClass = (status = '') => {
    const normalizedStatus = status.toLowerCase();

    if (normalizedStatus === 'overdue') {
        return 'bg-red-500 text-white';
    }

    if (normalizedStatus === 'almost due' || normalizedStatus === 'almost-due' || normalizedStatus === 'pending') {
        return 'bg-amber-400 text-white';
    }

    if (normalizedStatus === 'on-track' || normalizedStatus === 'in-touch') {
        return 'bg-emerald-900 text-white';
    }

    return 'bg-slate-500 text-white';
};

const getTagClass = (tag = '') => {
    const normalizedTag = tag.toLowerCase();

    if (normalizedTag === 'work' || normalizedTag === 'family' || normalizedTag === 'hobby' || normalizedTag === 'travel') {
        return 'bg-emerald-100 text-emerald-700';
    }

    return 'bg-slate-100 text-slate-700';
};

const Friend = ({ friends }) => {
    const friendList = Array.isArray(friends) ? friends : friends ? [friends] : [];

    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {friendList.map((friend) => (
                        <Link
                            key={friend.id}
                            to={`/friend/${friend.id}`}
                            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 text-center"
                        >
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{friend.name}</h3>
                            <p className="text-sm text-gray-400 mb-3">{friend.days_since_contact}d ago</p>

                            <div className="flex flex-wrap justify-center gap-2 mb-3">
                                {(friend.tags || []).map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`text-[10px] px-2 py-0.5 rounded-full font-medium uppercase ${getTagClass(tag)}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold ${getStatusClass(friend.status)}`}>
                                {friend.status}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Friend;