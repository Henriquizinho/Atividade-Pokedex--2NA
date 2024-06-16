import React, { useEffect, useState } from 'react'
import { fetchPokemons } from '../services/fetchAPI'

import * as S from '../styles/mainContainerStyle'

import BlackStripes from '/black-stripes.svg'

function HomeContainer() {
    const [quantity, setQuantity] = useState(10)
    const [pokemons, setPokemons] = useState([])


    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetchPokemons(quantity)
            const urls = data.results.map(pokemon => pokemon.url);

            const pokemonDetails = await Promise.all(urls.slice(0, quantity).map(async (url) => {
                const res = await fetch(url);
                return res.json();
            }));

            setPokemons(pokemonDetails);
        }

        getPokemons()
    }, [quantity])


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    return (
        <S.BodyContainer>
            <main>
                <h1>Listagem de Pokémons</h1>
                <div className="displayCards">
                    {pokemons.map((pokemon, index) => (
                        <S.Card key={index}>
                            <div>
                                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                            </div>
                            <div className="cardScreen"><img src={pokemon.sprites.front_default} width="200px"/></div>
                            <div className="cardInfo">
                                <div className="redDot" style={{ width: 24, height: 24, border: '2px solid #000' }}></div>
                                <div><p>{capitalizeFirstLetter(pokemon.name)}</p></div>
                                <img src={BlackStripes} width={42} />
                            </div>
                        </S.Card>
                    ))}
                </div>
                <S.LoadButton onClick={() => setQuantity(quantity + 10)}>Carregar +</S.LoadButton>
            </main>
        </S.BodyContainer>
    )
}

export default HomeContainer