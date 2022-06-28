import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ContestEntry.css';

const ContestEntry = (props) => {
    const { contexts } = useAuth();
    const { user } = contexts;
    const { email } = user;
    console.log(email);
    const { entry } = props;
    const { _id, contestId, userEmail, contestImage, vote } = entry;
    const countedVote = vote.length;
    console.log("entry id", _id);
    const handleClick = () => {
        const voteData = {
            email: email
        }
        fetch(`http://localhost:3010/vote/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(voteData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
    console.log(vote);
    return (
        < div className="col-sm-4" >
            <div className="card mb-3 img-card">
                <img className='img-fluid' src={`data:image/*;base64,${contestImage}`} />
                {/* <p>Contestant Email: <span className='fw-bold'>{userEmail}</span></p> */}
                <button className='vote-btn' onClick={handleClick} disabled={vote.includes(email) ? true : false}>&#10084;</button>
                <span className='vote-span'>{countedVote}</span>
            </div>
        </div>);
};

export default ContestEntry;