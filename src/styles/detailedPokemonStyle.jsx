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

    h1{
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 12px;
        text-align: center;
    }
`