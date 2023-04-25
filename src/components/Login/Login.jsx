import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    // Rcd ta AuthProvider function.............. 
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    // console.log(signIn);

    const handleLoginUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // Set the Register System ................
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error.massage);
            })
    };
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
    return (
        <Container>
            <div className='form-container'>
                <h3 className='form-title text-uppercase'>Login</h3>
                <form  onSubmit={handleLoginUser} >
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div>
                        {/* <p className='text-error'>{error}</p> */}
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                </form>
                <div className='link-div'>
                    <p><small>Create have an account? <Link to="/register">Register</Link></small></p>
                </div>
                <div className='link-div'>
                    <Button onClick={handleSignInGoogle} className='my-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                    <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
                </div>
            </div>
        </Container>
    );
};

export default Login;