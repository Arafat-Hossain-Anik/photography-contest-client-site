import React, { useEffect, useState } from 'react';
import ContestEntry from '../ContestEntry/ContestEntry';
import './ContestEntries.css';

const ContestEntries = (props) => {
    const { contest, id } = props;
    const { name, } = contest;
    const [entries, setEntries] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3010/entries/${id}`)
            .then(res => res.json())
            .then(data => setEntries(data));
    }, []);
    return (
        <div>
            <h3 className='text-center'>All Photos of <span style={{ color: "red" }}>{name}</span></h3>
            <div className='row mt-3'>
                {
                    entries.map(entry => <ContestEntry key={entry._id} entry={entry} setEntries={setEntries} Id={id}></ContestEntry>)
                }
            </div>
        </div>
    );
};

export default ContestEntries;