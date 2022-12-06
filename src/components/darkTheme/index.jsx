import React, { useState, useEffect } from 'react';
import './styles.css'

const DarkTheme = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
        setTheme('dark');
        } else {
        setTheme('light');
        }
        };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
  return (
    <div className={`App ${theme}` }>
        <button onClick={toggleTheme} className='DarkThemeButton'>Cambiar Tema</button>
        <i className="fa-solid fa-lightbulb"></i>
        <i class="fa-solid fa-arrow-right"></i>
        <i class="fa-regular fa-lightbulb"></i>
    </div>
  )
}

export default DarkTheme