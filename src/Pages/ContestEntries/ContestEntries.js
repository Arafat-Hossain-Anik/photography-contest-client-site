import React, { useEffect, useState } from 'react';
import ContestEntry from '../ContestEntry/ContestEntry';
import './ContestEntries.css';

const ContestEntries = (props) => {
    const { contest, id } = props;
    const { name, } = contest;
    const [entries, setEntries] = useState([]);
    const [doneVote, setDoneVote] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/entries/${id}`)
            .then(res => res.json())
            .then(data => setEntries(data));
    }, [doneVote]);
    return (
        <div>
            <h3 className='text-center'>All Entries Of This Contest</h3>
            <div className='row mt-3'>
                {
                    entries.map(entry => <ContestEntry key={entry._id} entry={entry} setEntries={setEntries} setDoneVote={setDoneVote} Id={id}></ContestEntry>)
                }
            </div>
        </div>
    );
};

export default ContestEntries;