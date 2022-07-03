import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const handleSubmit = (e) => {
        const email = emailRef.current.value;
        const adminMail = { email };
        fetch('http://localhost:3010/users', {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminMail)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount === 1 || res.upsertedCount === 1) {
                    alert('admin added')
                    emailRef.current.value = '';
                }
            });
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h1 className='text-center fw-bold mt-5'>Add Admin</h1>
            <form className='mt-4 row flex-column align-items-center' onSubmit={handleSubmit}>
                <input className="input-field w-50" type="email" ref={emailRef} style={{ background: '#dbdbdb', border: '1px solid gray' }} placeholder='E-mail Please' />
                <input className='btn btn-success mb-3 col-2' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default MakeAdmin;