import React from 'react';
import { TimelineContext } from './CreateContent';
import { useState } from 'react';

const TimelineProvider = ({ children }) => {
    const [interactionType, setInteractionType] = useState([]);
    const value = {
        interactionType,
        setInteractionType,
    };

    return (
        <TimelineContext.Provider value={value}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;