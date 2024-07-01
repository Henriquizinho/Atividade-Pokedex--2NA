import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';
import * as S from '../styles/detailedPokemonStyle'
import ScrollButton from './ScrollButton';
import { fetchPokemonDetailed } from '../services/fetchAPI';
import Card from './Card';
import { translateTypes } from '../services/translationType';

function DetailedPokemon() {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(true)
    const [portugueseTypes, setPortugueseTypes] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const data = await fetchPokemonDetailed(id)

            setPokemon(data)
            setLoading(false)
        }

        getPokemon()
    }, [])

    useEffect(() => {
        if (pokemon) {
            const typesInEnglish = pokemon.types.map(typeInfo => typeInfo.type.name);
            const typesInPortuguese = translateTypes(typesInEnglish);
            setPortugueseTypes(typesInPortuguese);
        }
    }, [pokemon]);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    if (loading) {
        return (
            <S.BodyContainer>
                <main>
                    <S.Loader />
                </main>
            </S.BodyContainer>
        );
    }

    return ( 
        < S.BodyContainer >
            <main>
                <h1>{capitalizeFirstLetter(pokemon.name)}</h1>

                <Card
                    pokeImg={pokemon.sprites.front_default}
                    pokeID={pokemon.id}
                />
                <S.Type>
                    {portugueseTypes.map((type, index) => {
                        return (
                            <p key={index} className={`type ${pokemon.types[index].type.name}`}>{type}</p>
                        )
                    }
                    )}
                </S.Type>
            </main>

            <ScrollButton />
        </S.BodyContainer >
    )
}

export default DetailedPokemon