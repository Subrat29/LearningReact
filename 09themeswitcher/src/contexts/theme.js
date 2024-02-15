import { createContext, useContext } from "react";

export const themeContext = createContext({
    theme: "light",
    toggleTheme: () => { }
})

export const ThemeProvider = themeContext.Provider

const useTheme = () => {
    return useContext(themeContext)
}

export default useTheme