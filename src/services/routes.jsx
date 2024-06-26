import { createBrowserRouter } from 'react-router-dom'

import App from '../App'

import HomeContainer from "../components/HomeContainer"
import DetailedPokemon from '../components/DetailedPokemon'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomeContainer />
            },
            {
                path: "/pokemon/:id",
                element: <DetailedPokemon />
            }
        ]
    }
])

export default router;