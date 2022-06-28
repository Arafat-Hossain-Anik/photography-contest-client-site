import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ContestEntry.css';

const ContestEntry = (props) => {
    const { contexts } = useAuth();
    const { user } = contexts;
    const { email } = user;
    const [clicked, setClicked] = useState(false);
    console.log(email);
    const { entry } = props;
    const { _id, contestId, userEmail, contestImage } = entry;
    console.log("entry id", _id);
    const [vote, setVote] = useState(0);
    const handleClick = () => {
        setVote(vote + 1);
        setClicked(true);
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
                <button className='vote-btn' onClick={handleClick} disabled={clicked}>&#10084;<span className='fs-6'>{vote}</span></button>
            </div>
        </div>);
};

export default ContestEntry;