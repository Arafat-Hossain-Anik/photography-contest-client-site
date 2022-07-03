import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
// import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { contexts } = useAuth();
    const { singInUsingGoogle, signInWithEmailPassword, setError, error, user, setLoading } = contexts;
    // const location = useLocation();
    // const history = useHistory();
    // const redirect_uri = location.state?.from || '/home';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        // console.log("reg is clicked");
        signInWithEmailPassword(email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError('');
                // history.push(redirect_uri);
            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }
    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                // history.push(redirect_uri);
                console.log(result);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const handleEmailChanged = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChanged = (e) => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <NavBar></NavBar>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 input-field-container roundeds">
                        <h2 className="fw-bold">Login</h2>
                        <form onSubmit={handleLogin}>
                            <input onBlur={handleEmailChanged} className="input-field" type="text" placeholder="E-mail" required />
                            <br />
                            <input onBlur={handlePasswordChanged} className="input-field" type="password" placeholder="Password" required />
                            {error ? <span className='text-danger'>Invalid Email or Password</span> : user.email && <span className='text-success'>Login In Successful</span>}
                            <br />
                            {/* sign up and cancel button */}
                            <div className="text-center">
                                <input type="submit" value="Submit" className='form-btn mb-3 mx-2' />
                                <NavLink to='/login'>
                                    <button onClick={handleGoogleLogin} type="submit" className="form-btn loginbtn mx-2">Login With Google</button>
                                </NavLink>
                            </div>
                            <div className='text-center'>
                                <NavLink to='/register'> New User?
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;