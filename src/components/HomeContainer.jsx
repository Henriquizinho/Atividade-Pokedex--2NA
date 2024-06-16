import React from 'react'
import * as S from '../styles/mainContainerStyle'

import BlackStripes from '/black-stripes.svg'

function HomeContainer() {
    return (
        <S.BodyContainer>
            <main>
                <h1>Listagem de Pokémons</h1>
                <div className="displayCards">
                    <S.Card>
                        <div>
                            <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                            <div className="redDot" style={{ width: 6, height: 6, margin: '0 8px' }}></div>
                        </div>
                        <div className="cardScreen"></div>
                        <div className="cardInfo">
                            <div className="redDot" style={{ width: 24, height: 24, border: '2px solid #000' }}></div>
                            <div><p>Nome</p></div>
                            <img src={BlackStripes} width={42}/>
                        </div>
                    </S.Card>
                </div>
                <S.LoadButton>Carregar +</S.LoadButton>
            </main>
        </S.BodyContainer>
    )
}

export default HomeContainer