import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import useAuth from '../../hooks/useAuth';
import { createPdf } from '../../Utility/pdfDownload';
import './ContestResult.css';

const ContestResult = () => {
    const { id } = useParams();
    const [contest, setContest] = useState({});
    const [entries, setEntries] = useState([]);
    const { contexts } = useAuth();
    const { user } = contexts;
    useEffect(() => {
        fetch(`http://localhost:5000/contest/${id}`)
            .then(res => res.json())
            .then(data => setContest(data))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/entries/${id}`)
            .then(res => res.json())
            .then(data => setEntries(data))
    }, []);
    let maxVote = Math.max(...entries.map(entry => entry.vote.length));
    let maxEntry = entries.find(entry => entry.vote.length === maxVote);
    // creating winner certificate
    const handleDownload = async () => {
        await createPdf(user.displayName)
    }
    return (
        <>
            <NavBar></NavBar>
            <div className='container'>
                <h2 className='text-center mt-3 mb-3'>{contest.name} Winner Entry</h2>
                {
                    maxEntry ? <div className="d-flex justify-content-center">
                        <div className="card mb-3" style={{ maxWidth: "600px" }}>
                            <img src={maxEntry.contestImage} className="img-fluid rounded-start" alt="winner-image" />
                            <div className="card-body">
                                <h2 className="card-title text-center text-danger special-font fw-bold">Congratulations</h2>
                                <p className="card-text fw-bold">Winner E-mail: <span className='text-secondary'>{maxEntry.userEmail}</span></p>
                                {
                                    user.email === maxEntry.userEmail ? <button onClick={handleDownload} className="btn btn-primary">Get Certificate</button> : ""
                                }
                            </div>
                        </div>
                    </div> : ""
                }
            </div >
            <Footer></Footer>
        </>
    );
};

export default ContestResult;