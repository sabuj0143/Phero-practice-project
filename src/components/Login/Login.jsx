import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <Container>
            <div className='form-container'>
                <h3 className='form-title text-uppercase'>Login</h3>
                <form>
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
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <div className='link-div'>
                    <p><small>Create have an account? <Link to="/register">Register</Link></small></p>
                </div>
            </div>
        </Container>
    );
};

export default Login;