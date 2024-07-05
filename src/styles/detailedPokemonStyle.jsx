import { styled } from 'styled-components'

export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.secondaryBG};
    color: ${props => props.theme.mainText};

    main {
        min-height: calc(100vh - 160px);
        height: 100%;
        width: 68%;
        background-color: ${props => props.theme.primaryBG};
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 68px;
    }

    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 12px;
        text-align: center;
        margin-bottom: 12px;
    }

    @media(max-width: 376px){
        main {
            width: 90%;
        }
    }
`

export const NavPokemon = styled.div`
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 12px;

    a {
        color: ${props => props.theme.mainText};
    }
`

export const SectionDetails = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
`

export const SectionInfo = styled.section`
    max-width: 800px;
    min-width: 280px;
    border: 2px solid ${props => props.theme.mainText};
    border-radius: 12px;
    padding: 8px;
    display: flex;
    flex-direction: column;

    ul {
        list-style: none;
        font-size: 16px;
        margin-left: 12px;
        font-weight: bold;
    }

    li {
        margin-left: 8px;
        margin-bottom: 8px;
        font-weight: normal;
    }
`

export const Type = styled.div`
    text-transform: uppercase;
    margin-top: 12px;
    display: flex;
    gap: 12px;
    align-self: center;


    .type{
        min-width: 80px;
        padding: 8px;
        text-align: center;
        border-radius: 8px;
        color: white;
    }

    .grass {
        background-color: #63BC5A;
    }

    .poison {
        background-color: #B567CE;
    }

    .fire {
        background-color: #FF9D55;
    }

    .water {
        background-color: #5090D6;
    }

    .bug {
        background-color: #91C12F;
    }

    .normal {
        background-color: #919AA2;
    }

    .electric {
        background-color: #F4D23C;
    }

    .ground {
        background-color: #D97845;
    }

    .fairy {
        background-color: #EC8FE6;
    }

    .fighting {
        background-color: #CE416B;
    }

    .psychic {
        background-color: #FA7179;
    }

    .rock {
        background-color: #C5B78C;
    }

    .ghost {
        background-color: #5269AD;
    }

    .ice {
        background-color: #73CEC0;
    }

    .dragon {
        background-color: #0B6DC3;
    }

    .stell {
        background-color: #5A8EA2;
    }

    .flying {
        background-color: #89AAE3;
    }
`


export const SectionMoves = styled.section`
    width: 100%;
    text-align: center;

    .movesContainer {
        display: flex;
        justify-content: center;
    }

    ul {
        list-style: none;
        column-count: 5;
        column-gap: 24px;
        padding: 12px;

        @media(max-width: 1300px) {
            column-count: 3;
        }

        @media(max-width: 1000px) {
            column-count: 2;
        }

        @media(max-width: 720px) {
            column-count: 1;
        }
    }

    li {
        margin: 8px;
        background-color: ${props => props.theme.secondaryBG};
        border-radius: 8px;
        padding: 4px;
    }
`

export const Loader = styled.div`
    width: 44.8px;
    height: 44.8px;
    color: #ED0001;
    position: relative;
    background: radial-gradient(11.2px,currentColor 94%,#0000);
    margin-top: 12px;


    &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(10.08px at bottom right,#0000 94%,currentColor) top    left,
            radial-gradient(10.08px at bottom left ,#0000 94%,currentColor) top    right,
            radial-gradient(10.08px at top    right,#0000 94%,currentColor) bottom left,
            radial-gradient(10.08px at top    left ,#0000 94%,currentColor) bottom right;
    background-size: 22.4px 22.4px;
    background-repeat: no-repeat;
    animation: loader 1.5s infinite cubic-bezier(0.3,1,0,1);
    }

    @keyframes loader {
    33% {
        inset: -11.2px;
        transform: rotate(0deg);
    }

    66% {
        inset: -11.2px;
        transform: rotate(90deg);
    }

    100% {
        inset: 0;
        transform: rotate(90deg);
    }
    }
`
