import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friends }) => {
    return (
        <div className="bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Friends</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {friends.map((friend) => (
                        <Link
                            key={friend.id}
                            to={`/friend/${friend.id}`}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center"
                        >
                            <img
                                src={friend.picture}
                                alt={friend.name}
                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{friend.name}</h3>
                            <p className="text-sm text-gray-500 mb-3">{friend.days_since_contact}d ago</p>

                            <div className="flex flex-wrap justify-center gap-2 mb-3">
                                {friend.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                                        {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>

                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${friend.status === 'overdue' ? 'bg-red-500' :
                                friend.status === 'in-touch' ? 'bg-green-500' :
                                    friend.status === 'pending' ? 'bg-yellow-500' :
                                        'bg-blue-500'
                                }`}>
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