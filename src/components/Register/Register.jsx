import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { user, createUser, signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        setSuccess('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('');
        if (password !== confirm) {
            setError('Your Password Did Not Match');
            return;
        }
        // validate if elseif using to password condition.
        else if (!/(?=.*[A-Z])/.test(password)) {
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
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                setSuccess('User has Create successFully');
                handleSendEmailVerification(result.user)
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.massage)
            })
    }
    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignInGithub2 = () => {
        signInWithGithub()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSendEmailVerification = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result);
                alert('Places Verification your email Address')
            })
    }

    return (
        <Container>
            <div className='form-container'>
                <h3 className='form-title text-uppercase'>Sign Up</h3>
                <form onSubmit={handleSignUp}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" id="" required />
                    </div>
                    <div>
                        {/* Show the not the current from info */}
                        <p className='text-danger'>{error}</p>
                        <p className='text-success'>{success}</p>
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <div className='link-div'>
                    <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
                </div>
                <div className='link-div'>
                    <Button onClick={handleSignInGoogle} className='my-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    <Button onClick={handleSignInGithub2} variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Register;