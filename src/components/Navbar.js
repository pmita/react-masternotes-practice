import React from 'react';
import './Navbar.css';
// ROUTER
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar'>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Cooking.io</h1>
                </Link>
                <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    );
}

export default Navbar;