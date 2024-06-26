import { useState } from "react"
import GlobalStyle from "./GlobalStyle"
import Footer from "./components/Footer"
import Header from "./components/Header"

import { CustomThemeProvider } from "./contexts/ThemeContext"

import { Outlet  } from 'react-router-dom'


function App() {
    const [search, setSearch] = useState('')

    return (
        <>
            <CustomThemeProvider>
                <GlobalStyle />
                <Header setSearch={setSearch} />
                <Outlet context={{ search }}/>
                <Footer />
            </CustomThemeProvider>
        </>
    )
}

export default App
