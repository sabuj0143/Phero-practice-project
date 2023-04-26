import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mt-4 text-center'>
            <h4 className='fs-3'> Create free Websites & Landing Pages in Sitelium!</h4>
            <p><small>By far the easiest free website builder. Create your website using ready-made blocks and layouts. It's perfect for beginners and experts alike.  <br /> No coding or design skills are required.</small></p>
            <Link to='/register'><Button className='text-black' variant="outline-info">Try Phero -it's Free   <FaArrowRight /> </Button></Link>
        </div>
    );
};

export default Banner;