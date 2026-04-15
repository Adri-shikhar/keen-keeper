import React from 'react';
import { FiPlus } from 'react-icons/fi';

const AddFriend = ({ friends }) => {
    const stats = [
        {
            number: friends.length.toString(),
            label: 'Total Friends'
        },
        {
            number: '3',
            label: 'On Track'
        },
        {
            number: '6',
            label: 'Need Attention'
        },
        {
            number: '12',
            label: 'Interactions This Month'
        }
    ];


    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded transition-colors">
                        <FiPlus size={20} />
                        Add a Friend
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                            <div className="text-4xl font-bold text-gray-800 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddFriend;