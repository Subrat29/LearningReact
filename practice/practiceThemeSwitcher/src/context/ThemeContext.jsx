import React, { useState, createContext } from 'react';

const ThemeContext = createContext('light')

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = (currentTheme) => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContextProvider, ThemeContext }                         