import React, { useState, useRef, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import './Create.css';
// ROUTER
import { useNavigate } from 'react-router-dom';

const Create = () => {
    //STATE
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState(''); //only value that user has typed on form
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null); // we need to reference the input directly from the dom

    // DATA
    const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST');
    const navigate = useNavigate();

    //EVENT HANDLERS
    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, ingredients, method, cookingTime : cookingTime + ' minutes'}); //json server adds an id automatically
    }

    const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim(); //removes any white space the user has added

        if(ing && !ingredients.includes(ing)){
            setIngredients((prevIngredients => [...prevIngredients, ing]))
        }
        setNewIngredient(''); // empty input form after user clicks add
        ingredientInput.current.focus(); //this allows to focus on the input form
    }

    // useEFFECT
    useEffect(() => {
        if(data){
            navigate('/');
        }
    }, [data, navigate]);
    return(
        <div className='create'>    
            <h2 className='page-title'>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title:</span>
                    <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </label>

                <label>
                    <span>Recipe ingredients:</span>
                    <div className='ingredients'>
                        <input 
                            type='text' 
                            value={newIngredient}
                            onChange={(e) => setNewIngredient(e.target.value)}
                            ref={ingredientInput}
                        />
                        <button onClick={handleAdd} className='btn'>add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map(item => <em key={item}>{item}, </em>)}</p>

                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time (minuts):</span>
                    <input
                        type='number'
                        onChange={(e) => setCookingTime(e.target.value)}
                        value={cookingTime}
                        required
                    />
                </label>

                <button className='btn'>Submit</button>
            </form>
        </div>
    );
};

export default Create;