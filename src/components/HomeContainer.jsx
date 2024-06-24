import { useEffect, useState } from 'react'

import { fetchPokemons } from '../services/fetchAPI'

import * as S from '../styles/homeContainerStyle'
import Card from './Card';
import ScrollButton from './ScrollButton';

function HomeContainer({ search }) {
    const [quantity, setQuantity] = useState(10)
    const [pokemons, setPokemons] = useState([])


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
                    <S.Loader />;
                </main>
            </S.BodyContainer>
        )
    }

    return (
        <S.BodyContainer>
            <main>
                <h1>Pokémons 1ª Geração</h1>
                <div className="displayCards">
                    {limitedPokemons.map((pokemon, index) => (
                        <Card
                            key={index}
                            pokeImg={pokemon.sprites.front_default}
                            pokeName={pokemon.name}
                            pokeID={pokemon.id}
                        />
                    ))}
                </div>
                <S.LoadButton onClick={() => setQuantity(quantity + 10)} disabled={quantity === 150}>{quantity === 150 ? 'Sem mais pokémons' : 'Carregar +'}</S.LoadButton>
            </main>

            <ScrollButton />
        </S.BodyContainer>
    )
}

export default HomeContainer