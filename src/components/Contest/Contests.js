import React, { useEffect, useState } from 'react';
import Contest from './Contest';

const Contests = () => {
    const [contests, setContests] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3010/contest')
            .then(res => res.json())
            .then(res => setContests(res));
    }, []);
    // console.log(contests.map(ct => ct.dateTime));
    return (
        <div className='container mt-3'>
            <div className='d-flex align-items-center flex-column'>
                <h2>OUR RUNNING <span style={{ color: "#a00b0b" }}>CONTEST</span></h2>
                <hr style={{ width: "10%", margin: "0", borderTop: "3px solid #a00b0b" }} />
            </div>
            <div className="row mt-4 justify-content-center">
                {
                    contests.map(contest => <Contest key={contest._id} contest={contest}></Contest>)
                }
            </div>
        </div>
    );
};

export default Contests;