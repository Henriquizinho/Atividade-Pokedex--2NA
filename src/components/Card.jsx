import * as S from '../styles/cardStyle'

import BlackStripes from '/black-stripes.svg'

function Card({ pokeImg, pokeName, pokeID }) {

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <S.Card>
            <div>
                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
            </div>
            <div className="cardScreen"><img src={pokeImg} width="200px" /><S.PokemonID>#{pokeID.toString().padStart(4, '0')}</S.PokemonID></div>
            <div className="cardInfo">
                <div className="redDot" style={{ width: 24, height: 24, border: '2px solid #000' }}></div>
                <div><p>{capitalizeFirstLetter(pokeName)}</p></div>
                <img src={BlackStripes} width={42} />
            </div>
        </S.Card>
    )
}
export default Card