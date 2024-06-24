import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

import { fetchPokemons } from '../services/fetchAPI'

import * as S from '../styles/homeContainerStyle'

import BlackStripes from '/black-stripes.svg'

function HomeContainer({ search }) {
    const [quantity, setQuantity] = useState(10)
    const [pokemons, setPokemons] = useState([])
    const [isVisible, setIsVisible] = useState(false)


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

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const limitedPokemons = pokemons.slice(0, quantity);


    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function toggleVisibility() {
        if (window.scrollY > 400) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

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
                        <S.Card key={index}>
                            <div>
                                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                            </div>
                            <div className="cardScreen"><img src={pokemon.sprites.front_default} width="200px" /><S.PokemonID>#{pokemon.id.toString().padStart(4, '0')}</S.PokemonID></div>
                            <div className="cardInfo">
                                <div className="redDot" style={{ width: 24, height: 24, border: '2px solid #000' }}></div>
                                <div><p>{capitalizeFirstLetter(pokemon.name)}</p></div>
                                <img src={BlackStripes} width={42} />
                            </div>
                        </S.Card>
                    ))}
                </div>
                <S.LoadButton onClick={() => setQuantity(quantity + 10)} disabled={quantity === 150}>{quantity === 150 ? 'Sem mais pokémons' : 'Carregar +'}</S.LoadButton>
            </main>

            <S.ScrollButton onClick={scrollToTop} isVisible={isVisible}><FaArrowUp /></S.ScrollButton>
        </S.BodyContainer>
    )
}

export default HomeContainer