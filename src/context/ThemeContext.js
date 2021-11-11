import { createContext, useReducer } from "react";

export const ThemeContext = createContext(); //returns a context object. Context provider lives there too

const themeReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return {...state, color : action.payload};
        case 'CHANGE_MODE':
            return {...state, mode : action.payload}
        default:
            return state;
    }
}

export const ThemeProvider = ({children}) => { //children props represent any component that will be wrapped by the provider
    const [state, dispatch] = useReducer(themeReducer, {
        color : '#58249c',
        mode : 'dark'
    });

    const changeColor = (color) => {
        dispatch({type: 'CHANGE_COLOR' , payload: color});
    }

    const changeMode = (mode) => {
        dispatch({type: 'CHANGE_MODE', payload : mode})
    }
    
    return(
        <ThemeContext.Provider value={{...state, changeColor, changeMode}}>
            {children}
        </ThemeContext.Provider>
    )

}