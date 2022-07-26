import React, { useEffect, useState } from 'react';
import Contest from '../Contest/Contest';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';

const AllContest = () => {
    const [contests, setContests] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/contest`)
            .then(res => res.json())
            .then(data => {
                setContests(data);
            });
    }, []);
    console.log(contests);
    return (
        <>
            <NavBar></NavBar>
            <div className='container mb-5 mt-3'>
                <h2 className='text-center special-font fw-bold'>List Of All Running Contest</h2>
                <div className="row mt-4 gy-2 justify-content-center">
                    {
                        contests.map(contest => <Contest key={contest._id} contest={contest}></Contest>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AllContest;