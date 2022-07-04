import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import axios from "axios";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createEmailPasswordUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const newUser = { email, name };
                storeUser(newUser);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message);
                // ..
            });
        //         .catch ((error) => {
        // // const errorCode = error.code;
        // // const errorMessage = error.message;
        // setError(error.message);
        // ..
    }
    const signInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, []);
    // useEffect(() => {
    //     fetch(`https://hidden-coast-67939.herokuapp.com/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(res => setAdmin(res.admin));
    // }, [user.email])
    const storeUser = (user) => {
        axios.post('https://floating-wildwood-13297.herokuapp.com/user', user)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Registration success!');
                    document.location.reload();
                }
            })
    }
    return {
        user,
        error,
        createEmailPasswordUser,
        signInWithEmailPassword,
        singInUsingGoogle,
        logOut,
        setError,
        setLoading,
        loading
    }
}
export default useFirebase;