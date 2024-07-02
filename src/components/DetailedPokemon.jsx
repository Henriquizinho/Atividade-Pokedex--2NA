import { useState, useEffect } from 'react'

import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import * as S from '../styles/detailedPokemonStyle'
import ScrollButton from './ScrollButton';
import { fetchPokemonDetailed, fetchAbilityData } from '../services/fetchAPI';
import Card from './Card';

function DetailedPokemon() {
    const { id } = useParams()

    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState(true)

    const [abilitiesData, setAbilitiesData] = useState([]);

    useEffect(() => {
        const getPokemon = async () => {
            const data = await fetchPokemonDetailed(id)

            setPokemon(data)
            setLoading(false)
        }

        getPokemon()
    }, [id])

    useEffect(() => {
        if (!pokemon) return;

        const fetchAbilitiesData = async () => {
            const data = await Promise.all(pokemon.abilities.map(async (element) => {
                const abilityData = await fetchAbilityData(element.ability.url);
                return abilityData
            }));
            setAbilitiesData(data);
        };

        fetchAbilitiesData();
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

                <S.NavPokemon>
                    {id == 1 ? <div></div> : <Link to={`/pokemon/${id <= 1 ? pokemon.id : pokemon.id - 1}`}><FaArrowLeft size={8} /> Pokémon Anterior</Link>}

                    {id == 151 ? <div></div> : <Link to={`/pokemon/${id >= 151 ? pokemon.id : pokemon.id + 1}`}>Próximo Pokémon <FaArrowRight size={8} /></Link>}


                </S.NavPokemon>
                <S.SectionDetails>
                    <Card
                        pokeImg={pokemon.sprites.front_default}
                        pokeID={pokemon.id}
                    />
                    <S.SectionInfo>
                        <h1>{capitalizeFirstLetter(pokemon.name)}</h1>

                        <h2>Abilities</h2>
                        {abilitiesData.map((element, index) => {
                            return (
                                <ul key={index}>{capitalizeFirstLetter(element.name)}
                                    <li>{element.effect_entries[1]?.short_effect}</li>
                                </ul>
                            )
                        }
                        )}
                        <S.Type>
                            {pokemon.types.map((element, index) => {
                                return (
                                    <p key={index} className={`type ${element.type.name}`}>{element.type.name}</p>
                                )
                            }
                            )}
                        </S.Type>
                    </S.SectionInfo>
                </S.SectionDetails>
            </main>

            <ScrollButton />
        </S.BodyContainer >
    )
}

export default DetailedPokemon