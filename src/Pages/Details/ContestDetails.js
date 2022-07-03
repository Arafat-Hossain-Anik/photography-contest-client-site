import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ContestEntries from '../ContestEntries/ContestEntries';

const ContestDetails = () => {
    const { id } = useParams();
    const [contest, setContest] = useState({});
    const [image, setImage] = useState(null);
    const { contexts } = useAuth();
    const { user } = contexts;
    const [entry, setEntry] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3010/contest/${id}`)
            .then(res => res.json())
            .then(data => setContest(data))
    }, [])
    //priviously uploaded or not
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:3010/entry/${id}/${email}`)
            .then(res => res.json())
            .then(data => setEntry(data))
    }, []);
    console.log('single data', entry);
    const handleUpload = (e) => {
        e.preventDefault();
        const email = user.email;
        const formData = new FormData();
        formData.append('image', image);
        fetch(`http://localhost:3010/contest/${id}/${email}/image`, {
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
        <div className='container mt-3'>
            <h2 className='text-center'>{contest.name}</h2>
            <>
                {
                    (entry.userEmail === !email) ?
                        <div className="container my-5">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 input-field-container roundeds">
                                    <h2 className="fw-bold">Upload Your Photo</h2>
                                    <form onSubmit={handleUpload}>
                                        <input type="file" id="img" name="img" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
                                        <div className="clearfix text-center">
                                            <input type="submit" value="Submit" className='form-btn mb-3' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        : <div>
                            <h6 className='text-center text-success'>You have already uploaded your photo</h6>
                        </div>
                }
            </>
            <ContestEntries contest={contest} id={id} />
        </div>
    );
};

export default ContestDetails;