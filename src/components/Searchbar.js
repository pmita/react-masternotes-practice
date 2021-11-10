import React, { useState } from 'react';
import './Searchbar.css';
// ROUTER
import { useNavigate } from 'react-router';

const Searchbar = () => {
    //STATE
    const [term, setTerm] = useState('');
    const navigate = useNavigate();

    //EVENT HANDLERS
    const handleSubmit = (e) => {
        e.preventDefault();

        // ?q= redirecting the user to search page with query parameters attached to our api link
        navigate(`/search?query=${term}`)

    }
    return(
        <div className='searchbar'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='search'>Search:</label>
                <input
                    tyoe='text'
                    id='search'
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
            </form>
        </div>
    );
}

export default Searchbar;