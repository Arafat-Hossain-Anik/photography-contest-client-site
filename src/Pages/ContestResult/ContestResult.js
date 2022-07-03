import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ContestResult.css';

const ContestResult = () => {
    const { id } = useParams();
    const [contest, setContest] = useState({});
    const [entries, setEntries] = useState([]);
    const [entry, setEntry] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3010/contest/${id}`)
            .then(res => res.json())
            .then(data => setContest(data))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:3010/entries/${id}`)
            .then(res => res.json())
            .then(data => setEntries(data))
    }, []);
    let maxVote = Math.max(...entries.map(entry => entry.vote.length));
    let maxEntry = entries.find(entry => entry.vote.length === maxVote);
    if (maxEntry) {
        const { userEmail, contestImage } = maxEntry;
        console.log(userEmail);
    }
    return (
        <div className='container'>
            <h2 className='text-center mt-3 mb-3'>{contest.name} Winner Entry</h2>
            {
                maxEntry ? <div className="d-flex justify-content-center">
                    <div className="card mb-3" style={{ maxWidth: "600px" }}>
                        <img src={maxEntry.contestImage} className="img-fluid rounded-start" alt="winner-image" />
                        <div className="card-body">
                            <h2 className="card-title text-center text-danger special-font fw-bold">Congratulations</h2>
                            <p className="card-text fw-bold">Winner E-mail: <span className='text-secondary'>{maxEntry.userEmail}</span></p>
                        </div>
                    </div>
                </div> : ""
            }
        </div >
    );
};

export default ContestResult;