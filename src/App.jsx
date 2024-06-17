import { useState } from "react"
import GlobalStyle from "./GlobalStyle"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeContainer from "./components/HomeContainer"

function App() {
    const [search, setSearch] = useState('')

    return (
        <>
            <GlobalStyle />
            <Header setSearch={ setSearch } />
            <HomeContainer search={search} />
            <Footer />
        </>
    )
}

export default App
