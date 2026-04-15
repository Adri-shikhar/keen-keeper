import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendDetails from '../Friend/FriendDetails/FriendDetails';

const ShowDate = () => {
    const dateData = useLoaderData();
    console.log('dateData:', dateData);
    return (
        <div>
            <FriendDetails dateData={dateData} />
        </div>
    );
};

export default ShowDate;