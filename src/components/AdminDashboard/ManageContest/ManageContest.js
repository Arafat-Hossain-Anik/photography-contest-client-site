import React, { useEffect, useState } from 'react';
const ManageContest = () => {
    const [contests, setContests] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/contest`)
            .then(res => res.json())
            .then(data => {
                setContests(data);
            });
    }, []);
    const removeItem = (id) => {
        const areSure = window.confirm('Are You Sure Want To Delete?');
        if (areSure) {
            fetch(`http://localhost:5000/contest/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('You Have Deleted One Item');
                        const selectAfterRemove = contests.filter((select) => !(select._id === id));
                        setContests(selectAfterRemove);
                    }
                    else {
                        alert('Somethings bad happens');
                    }
                })
        }
    }
    return (
        <div>
            <div className="text-center fw-fold">
                <h1 className='fw-bold'> Total Products: {contests.length}</h1>
            </div>
            <>
                <div className="">
                    {contests.length ? <div>
                        {
                            contests.map(contest => (
                                <div className='container' key={contest._id} style={{ paddingTop: '50px' }}>
                                    <div className="row">
                                        <div className="col">
                                            <img src={contest.image} className="card-img-top h-100 w-100 " alt="" />
                                        </div>
                                        <div className="col">
                                            <h2 className="fw-bold "> {contest.name}</h2>
                                            <p className="fw-bold ">{contest.details}</p>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col booking">
                                                            <button className='btn btn-danger' onClick={() => removeItem(contest._id)}><i className="fas fa-trash"></i> Remove </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>

                            ))
                        }
                    </div> :
                        <div> <h1 className='text-danger text-center'>No contest running</h1></div>
                    }
                </div>
            </>
        </div>
    );
};

export default ManageContest;