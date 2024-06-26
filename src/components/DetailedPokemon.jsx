import { useParams } from 'react-router-dom';
import * as S from '../styles/homeContainerStyle'
import ScrollButton from './ScrollButton';

function DetailedPokemon() {
    const { id } = useParams()

    return (
        <S.BodyContainer>
            <main>
                <h1>Pokemon {id}</h1>
            </main>

            <ScrollButton />
        </S.BodyContainer>
    )
}

export default DetailedPokemon