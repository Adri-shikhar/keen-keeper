const ShowDate = () => null;

ShowDate.getDhakaDateTime = () => {
    const now = new Date();
    return {
        date: now.toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' }),
        time: now.toLocaleTimeString('en-GB', {
            timeZone: 'Asia/Dhaka',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        }),
    };
};

export default ShowDate;