import React, { useEffect, useState } from 'react';

const AllContest = () => {
    const [contests, setContests] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3010/contest`)
            .then(res => res.json())
            .then(data => {
                setContests(data.result);
            });
    }, []);
    return (
        <div>
            <h3 className='text-center'>List Of All Running Contest</h3>
        </div>
    );
};

export default AllContest;