import { useEffect, useState } from 'react'

import { fetchPokemons } from '../services/fetchAPI'

import * as S from '../styles/homeContainerStyle'
import Card from './Card';
import ScrollButton from './ScrollButton';
import { useOutletContext, Link } from 'react-router-dom';

function HomeContainer() {
    const [quantity, setQuantity] = useState(10)
    const [pokemons, setPokemons] = useState([])

    const { search } = useOutletContext()


    useEffect(() => {
        const getPokemons = async () => {
            const data = await fetchPokemons()

            if (search === '') {
                setPokemons(data);
            } else {
                setPokemons(data.filter(pokemon =>
                    pokemon.name && pokemon.name.toLowerCase().includes(search.toLowerCase())
                ))
            }

        }

        getPokemons()
    }, [search])

    const limitedPokemons = pokemons.slice(0, quantity);

    if (pokemons.length === 0) {
        return (
            <S.BodyContainer>
                <main>
                    <S.Loader />
                </main>
            </S.BodyContainer>
        )
    }

    return (
        <S.BodyContainer>
            <main>
                <h1>Pokémons 1st Generation</h1>
                <div className="displayCards">
                    {limitedPokemons.map((pokemon, index) => (
                        <Link to={`/pokemon/${pokemon.id}`} key={index} >
                            <Card
                                pokeImg={pokemon.sprites.front_default}
                                pokeName={pokemon.name}
                                pokeID={pokemon.id}
                            />
                        </Link >
                    ))}
                </div>

                {(quantity < 150 && search === '') && (
                    <S.LoadButton onClick={() => setQuantity(quantity + 10)}>
                        Carregar +
                    </S.LoadButton>
                )}
            </main>

            <ScrollButton />
        </S.BodyContainer>
    )
}

export default HomeContainer