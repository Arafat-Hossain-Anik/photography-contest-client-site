import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ContestEntry.css';

const ContestEntry = (props) => {
    const { entry, setDoneVote } = props;
    const { contexts } = useAuth();
    const { user } = contexts;
    const { email } = user;
    const { _id, contestId, userEmail, contestImage, vote } = entry;
    let countedVote = vote.length;
    const handleClick = () => {
        const voteData = {
            email: email
        }
        fetch(`http://localhost:5000/vote/${_id}`, {
            method: 'PATCH',
            body: JSON.stringify(voteData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setDoneVote(doneVote => doneVote + 1);
            }

            );
    }
    return (
        < div className="col-sm-4" >
            <div className="card mb-3 img-card">
                {/* <img className='img-fluid' src={`data:image/*;base64,${contestImage}`} /> */}
                <img className='img-fluid' src={contestImage} />
                {/* <p>Contestant Email: <span className='fw-bold'>{userEmail}</span></p> */}
                <button className='vote-btn' onClick={handleClick} disabled={vote.includes(email) ? true : false}>&#10084;</button>
                <span className='vote-span'>{countedVote}</span>
            </div>
        </div>);
};

export default ContestEntry;