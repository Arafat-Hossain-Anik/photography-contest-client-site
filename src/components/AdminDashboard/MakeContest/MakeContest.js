import React, { useRef, useState } from 'react';
import './MakeContest.css';

const MakeContest = () => {
    const nameRef = useRef();
    const datetimeRef = useRef();
    const detailsRef = useRef();
    const [sent, setSent] = useState([]);
    const [image, setImage] = useState(null);

    const handleUpload = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const dateTime = datetimeRef.current.value;
        const details = detailsRef.current.value;
        const formData = new FormData();
        formData.append('name', name);
        formData.append('dateTime', dateTime);
        formData.append('details', details);
        formData.append('image', image);
        // console.log(name, dateTime, details, image);
        console.log(formData);
        fetch('https://floating-wildwood-13297.herokuapp.com/createcontest', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result);
                if (result) {
                    window.alert("Photo Uploaded Successfully");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div className='shadow rounded container mt-5 mb-3'>
            <h2 className='fw-bold text-center'>Add New Contest</h2>
            <form onSubmit={handleUpload} className="row g-3 flex-column align-items-center">
                <div className="col-6">
                    <label htmlFor="contestname" className="form-label">Contest Title</label>
                    <input className='form-control' ref={nameRef} type="text" name="" id="contestname" />
                </div>
                <div className="col-6">
                    <label htmlFor="selecttime" className="form-label">Select Contest Time</label>
                    <input ref={datetimeRef} type="datetime-local" className="form-control" id="selecttime" />
                </div>
                <div className="col-6">
                    <label htmlFor="selectimg" className="form-label">Select Contest Image</label>
                    <input className='form-control' type="file" id="selectimg" name="img" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                </div>
                <div className="col-6">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Contest Details</label>
                    <textarea ref={detailsRef} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-6 pb-2">
                    <input type="submit" value="Add Contest" className='btn btn-primary' />
                </div>
            </form>
        </div>
    );
};

export default MakeContest;