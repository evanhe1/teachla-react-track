import "./ThemeSetter.css"
import React, { useContext } from 'react';
import ThemeContext from '../Contexts/ThemeContext'

function ThemeSetter()
{
    const [,setTheme] = useContext(ThemeContext)

    const uclaThemeHandler = () => {
        setTheme("ucla")
    }

    const defaultThemeHandler = () => {
        setTheme("default")
    }
    
    return (
        <div className="button-container">
            <button className="ucla-button" onClick={uclaThemeHandler}>UCLA</button>
            <button className="default-button" onClick={defaultThemeHandler}>Default</button>
        </div>
    )
}

export default ThemeSetter;