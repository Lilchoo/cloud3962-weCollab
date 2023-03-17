import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history.push('/')
        //     })
        //     .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         // it successfully created a new user with email and password
        //         if (auth) {
        //             history.push('/')
        //         }
        //     })
        //     .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/' className='no-underline text-black login-direct-home'>
                <h1>weCollab</h1>
            </Link>

            <div className='login-container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login-signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the weCollab Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login-registerButton'>Create your weCollab Account</button>
            </div>
        </div>
    )
}

export default Login
