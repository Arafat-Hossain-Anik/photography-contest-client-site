import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './ContestEntry.css';

const ContestEntry = (props) => {
    const { contexts } = useAuth();
    const { user } = contexts;
    const { email } = user;
    console.log(email);
    const { entry } = props;
    const { contestId, userEmail, contestImage } = entry;
    const [vote, setVote] = useState(0);
    const handleClick = () => {
        setVote(vote + 1);
    }
    return (
        < div className="col-sm-4" >
            <div className="card mb-3 img-card">
                <img className='img-fluid' src={`data:image/*;base64,${contestImage}`} />
                {/* <p>Contestant Email: <span className='fw-bold'>{userEmail}</span></p> */}
                <button className='vote-btn' onClick={handleClick}>&#10084;</button>
            </div>
        </div>);
};

export default ContestEntry;