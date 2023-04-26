import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <>
            <Container className='main-header border border-1 d-flex bg-secondary-subtle rounded text-center align-items-center justify-content-around'>
                <div>
                    <h2>Phero</h2>
                </div>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {
                        user &&
                        <Link to="/servers">Servers</Link>
                    }
                    <Link to="/jobs">Jobs Apply</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                {
                    user ?
                        <>
                            <span>{user.email}</span>
                            <Button onClick={handleLogOut} className='ms-4' variant="dark">Sign Out</Button>
                        </> : <div>
                            <Link to="/login"><Button variant="dark">Login</Button></Link>
                            <Link to='/register'><Button className='ms-4' variant="dark">Register</Button></Link>
                        </div>
                }
            </Container>
        </>
    );
};

export default Header;