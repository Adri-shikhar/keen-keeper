import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import AddFriend from '../Navbar/AddFriend';
import Friend from '../Friend/Friend';

const Home = () => {
    const friends = useLoaderData();

    return (
        <>
            <AddFriend friends={friends} />
            <Friend friends={friends} />
        </>
    );
};

export default Home;