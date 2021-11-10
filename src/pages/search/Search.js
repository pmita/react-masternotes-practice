import React from 'react';
// ROUTER
import { useLocation } from 'react-router';
//COMPONENT
import RecipeList from '../../components/RecipeList';
//HOOKS
import { useFetch } from '../../hooks/useFetch';
import './Search.css';

const Search = () => {
    //Extract the user query paramaters
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const query = queryParams.get('query');

    console.log(queryParams);

    const url = `http://localhost:3000/recipes?q=${query}`;
    const { data, isPending, error } = useFetch(url);

    return(
       <div>
           <h2 className='page-title'>Recipes Inlcuding {query}</h2>
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading...</p>}
           {data && <RecipeList recipes={data} />}
       </div>
    );
};

export default Search;