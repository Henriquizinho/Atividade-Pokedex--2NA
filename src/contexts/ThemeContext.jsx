import { createContext, useCallback, useState } from 'react'
import { ThemeProvider } from "styled-components"
import { dark, light } from '../styles/theme'

export const ThemeContext = createContext()

export const CustomThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(light)

    const toggleTheme = useCallback(() => {
        theme === light ? setTheme(dark) : setTheme(light)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default CustomThemeProvider