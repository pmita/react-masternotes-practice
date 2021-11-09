import React from 'react';
import './Recipe.css';
// ROUTER
import { useParams } from 'react-router';
// HOOKS
import { useFetch } from '../../hooks/useFetch';

const Recipe = () => {
    const { id } = useParams(); //returns an object
    const url = 'http://localhost:3000/recipes/' + id;
    const { error, isPending, data: recipe} = useFetch(url);

    return(
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && <h1>{recipe.title}</h1>}
        </div>
    );
};

export default Recipe;