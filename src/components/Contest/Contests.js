import React, { useEffect, useState } from 'react';
import Contest from './Contest';
import './Contest.css';

const Contests = () => {
    const [contests, setContests] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 2;
    useEffect(() => {
        fetch(`http://localhost:3010/contests?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setContests(data.result);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);
    return (
        <div className='container mt-3'>
            <div className='d-flex align-items-center flex-column'>
                <h2>OUR RUNNING <span style={{ color: "#a00b0b" }}>CONTEST</span></h2>
                <hr style={{ width: "10%", margin: "0", borderTop: "3px solid #a00b0b" }} />
            </div>
            {/* pagination */}
            <div className="btn-group paginator" role="group" aria-label="Basic outlined example">
                {
                    [...Array(pageCount).keys()].map(number => <button className={number === page ? 'btn btn-outline-primary active' : 'btn btn-outline-primaty'} key={number} onClick={() => setPage(number)}>{number + 1}</button>)
                }
            </div>
            <div className="row mt-4">
                {
                    contests.map(contest => <Contest key={contest._id} contest={contest}></Contest>)
                }
            </div>
        </div>
    );
};

export default Contests;