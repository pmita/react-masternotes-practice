import React from 'react';
import './Navbar.css';
// ROUTER
import { Link } from 'react-router-dom'
// COMPONENTS
import Searchbar from './Searchbar';
// HOOKS
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const { color } = useTheme();

    return(
        <div className='navbar' style={{background: color}}>
            <nav>
                <Link to='/' className='brand'>
                    <h1>Cooking.io</h1>
                </Link>
                <Searchbar />
                <Link to='/create'>Create Recipe</Link>
            </nav>
        </div>
    );
}

export default Navbar;