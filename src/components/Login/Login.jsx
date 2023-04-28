import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useState } from 'react';
import eye from '../../assets/eye.png'
import hide from '../../assets/hide.png'


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);
    const [control, setControl] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    // Rcd ta AuthProvider function.............. 
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    // console.log(signIn);

    const handleLoginUser = (event) => {
        event.preventDefault();
        setSuccess('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        // validate if elseif using to password condition.
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('places One Uppercase add him.');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Assert a string has at least one special character');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Assert a string has at least one number');
            return;
        }

        // Set the Register System ................
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser)
                setSuccess('User has Create successFully');
                form.reset();
                navigate(location.state.pathname || "/")
            })
            .catch(error => {
                setError(error.massage)
            })
    };
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
            })
            .catch(error => {
                setError(error.massage);
            })
    }
    const handleSignInGithub = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Container>
            <div className='form-container'>
                <h3 className='form-title text-uppercase'>Login</h3>
                <form onSubmit={handleLoginUser} >
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control position-relative">
                        <label htmlFor="password">Password</label>
                        <input type={control ? 'text' : 'password'} name="password" id="" required />

                        <div onClick={() => { setControl(!control) }} className='monsur position-absolute'>
                            {
                                control ?
                                    <img className='w-24' style={{ width: '24px' }} src={hide} alt="" /> :
                                    <img className='w-24' style={{ width: '24px' }} src={eye} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        {/* Show the not the current from info */}
                        <p className='text-danger'>{error}</p>
                        <p className='text-success'>{success}</p>
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <div className='link-div'>
                    <p><small>Create have an account? <Link to="/register">Register</Link></small></p>
                </div>
                <div className='link-div'>
                    <Button onClick={handleSignInGoogle} className='my-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    <Button onClick={handleSignInGithub} variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;