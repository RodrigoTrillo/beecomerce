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
        <button onClick={toggleTheme} className='DarkThemeButton'>Toggle Theme</button>
    </div>
  )
}

export default DarkTheme