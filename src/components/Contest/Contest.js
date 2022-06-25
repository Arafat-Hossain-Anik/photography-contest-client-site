import React from 'react';
import Countdown from 'react-countdown';


const Completionist = () => <span>Contest Is Over</span>;


const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div>
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>{days}:{hours}:{minutes}:{seconds}</span> <br />
                <button className='btn btn-success'>Enter Now</button>
            </div>);
    }
};
const Contest = (props) => {
    const { contest } = props;
    return (

        <div className="col-sm-6">
            <div className="card mb-3">
                <img src="https://rstheme.com/products/html/shooter/shooter-html/images/about/3.jpg" className="card-img-top" alt="..." style={{ height: '300px' }} />
                <div className="card-body">
                    <h5 className="card-title">{contest.name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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