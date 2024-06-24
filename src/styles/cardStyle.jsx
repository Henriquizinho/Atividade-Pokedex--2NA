import { styled } from 'styled-components'

export const Card = styled.div`
    width: 280px;
    height: 330px;
    background-color: #CCC;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 18px 18px 18px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 32px 100%, 0 298px);
    cursor: pointer;

    .redDot{
        border-radius: 50%;
        background-color: #ED0001;
        display: inline-block;
    }

    .cardScreen {
        width: 244px;
        height: 254px;
        border: 2px solid #707070;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .cardInfo {
        width: 230px;
        height: 22px;
        margin-top: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: end;
        color: #2C2C2C;
        font-size: 16px;
        font-weight: 500;
    }
`

export const PokemonID = styled.span`
    position: absolute;
    bottom: 4px;
    padding: 4px 8px;
    background-color: #707070;
    color: #FFF;
    border-radius: 4px;
    font-size: 12px;
`