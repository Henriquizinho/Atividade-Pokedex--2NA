import { useState } from "react"
import GlobalStyle from "./GlobalStyle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeContainer from "./components/HomeContainer"
import { CustomThemeProvider } from "./contexts/ThemeContext"


function App() {
    const [search, setSearch] = useState('')

    return (
        <>
            <CustomThemeProvider>
                <GlobalStyle />
                <Header setSearch={setSearch} />
                <HomeContainer search={search} />
                <Footer />
            </CustomThemeProvider>
        </>
    )
}

export default App
