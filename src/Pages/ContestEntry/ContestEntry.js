import React from 'react';
import './ContestEntry.css';

const ContestEntry = (props) => {
    const { entry } = props;
    const { contestId, userEmail, contestImage } = entry;
    const btnStyle = {
        backgroundColor: "#4CAF50", /* Green */
        border: "none",
        color: "white",
        width: "12%",
        textAlign: "center",
        textDecoration: "none",
        fontSize: "32px",
        borderRadius: "50%"
    }
    return (
        < div className="col-sm-4" >
            <div className="card mb-3 img-card">
                <img className='img-fluid' src={`data:image/*;base64,${contestImage}`} />
                {/* <p>Contestant Email: <span className='fw-bold'>{userEmail}</span></p> */}
                <button className='vote-btn'>&#10084;</button>
            </div>
        </div>);
};

export default ContestEntry;