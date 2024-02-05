import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const themeStyles = {
    light: {
        backgroundColor: '#fff',
        color: '#000',
    },
    dark: {
        backgroundColor: '#333',
        color: '#fff',
    }
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme,  themeStyles}}>
        {children}
        </ThemeContext.Provider>
    )
}

