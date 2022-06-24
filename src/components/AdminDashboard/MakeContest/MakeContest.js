import React, { useRef, useState } from 'react';
import './MakeContest.css';

const MakeContest = () => {
    const nameRef = useRef();
    const datetimeRef = useRef();
    const [sent, setSent] = useState([]);
    const handleClick = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const dateTime = datetimeRef.current.value;
        const contestData = { name, dateTime };
        fetch('http://localhost:3010/post', {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contestData)
        })
            .then(res => res.json())
            .then(data => setSent(data))
        if (sent) {
            window.alert("Contest Set");
            setSent([]);
            nameRef.current.value = "";
            datetimeRef.current.value = "";

        }
        console.log(dateTime);
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input ref={nameRef} type="text" name="" id="" />
                <input ref={datetimeRef} type="datetime-local" name="" id="" />
                <input type="submit" value="Add Contest" />
            </form>
        </div>
    );
};

export default MakeContest;