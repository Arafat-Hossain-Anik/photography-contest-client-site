import React from 'react';
import Countdown from 'react-countdown';
import { NavLink } from 'react-router-dom';


const Contest = (props) => {
    const { contest } = props;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <div>
                <h4>Contest Is Over</h4>
                <NavLink className='btn btn-success' to={`/contest_result/${contest._id}`}>See Result</NavLink>
            </div>;
        } else {
            return (
                <div>
                    <span style={{ fontSize: "40px", fontWeight: "bold" }}>{days}:{hours}:{minutes}:{seconds}</span> <br />
                    {/* <Link className='btn btn-success' to={`/details/$contest._id}` > Enter Now </Link> */}
                    <NavLink className='btn btn-success' to={`/contest/${contest._id}`}>Enter Now</NavLink>
                </div >);
        }
    };
    return (

        <div className="col-sm-6">
            <div className="card mb-3 h-100">
                <img src={contest.image} className="card-img-top" alt="..." style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title">{contest.name}</h5>
                    <p className="card-text">{contest.details}</p>
                    <div>
                        <Countdown
                            date={contest.dateTime}
                            renderer={renderer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contest;