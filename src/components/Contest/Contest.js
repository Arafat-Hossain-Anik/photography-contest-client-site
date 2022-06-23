import React, { useState } from 'react';
import Countdown from 'react-countdown';
const Completionist = () => <span>You are good to go!</span>;


const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return <span style={{ fontSize: "40px", fontWeight: "bold" }}>{days}:{hours}:{minutes}:{seconds}</span>;
    }
};
const Contest = () => {
    const [mainDate, setMainDate] = useState('2022-06-24T08:30');
    function getData(event) {
        setMainDate(event.target.value);
    }
    return (
        <div className='container mt-3'>
            <div className='d-flex align-items-center flex-column'>
                <h2>OUR RUNNING <span style={{ color: "#a00b0b" }}>CONTEST</span></h2>
                <hr style={{ width: "10%", margin: "0", borderTop: "3px solid #a00b0b" }} />
            </div>
            <div className="row mt-4 justify-content-center">
                <div className="col-sm-6">
                    <div className="card mb-3">
                        <img src="https://rstheme.com/products/html/shooter/shooter-html/images/about/3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <div>
                                <input onChange={getData} type="datetime-local" name="" id="dateTime" />
                                <br />
                                <Countdown
                                    date={mainDate}
                                    renderer={renderer}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card mb-3">
                        <img src="https://rstheme.com/products/html/shooter/shooter-html/images/about/3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contest;