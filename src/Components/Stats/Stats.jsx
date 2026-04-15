import React, { useContext } from 'react';
import { Pie, PieChart } from 'recharts';
import { TimelineContext } from '../../Context/CreateContent';


const Stats = () => {

    const { interactionType } = useContext(TimelineContext);
    // console.log('interactionType in Stats:', interactionType);
    const callCount = interactionType.filter(i => i.type === 'call').length;
    const textCount = interactionType.filter(i => i.type === 'text').length;
    const videoCount = interactionType.filter(i => i.type === 'video').length;
    // console.log('Call Count:', callCount);
    // console.log('Text Count:', textCount);
    // console.log('Video Count:', videoCount);


    const data = [
        { name: 'Text', value: textCount, fill: '#8B5CF6' },
        { name: 'Call', value: callCount, fill: '#166534' },
        { name: 'Video', value: videoCount, fill: '#22C55E' },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Friendship Analytics</h1>
                <p className="text-base text-gray-600 mb-8">By Interaction Type</p>

                <div className="flex justify-center">
                    <PieChart width={500} height={400}>
                        <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={100}
                            cornerRadius={50}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}`}
                        />
                    </PieChart>
                </div>

                <div className="flex justify-center gap-8 mt-8">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        <span className="text-sm text-gray-700">Text</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-800"></div>
                        <span className="text-sm text-gray-700">Call</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-700">Video</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;