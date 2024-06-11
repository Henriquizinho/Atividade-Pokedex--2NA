import { styled } from 'styled-components'

export const BodyContainer = styled.main`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;

    main {
        width: 68%;
        height: 100%;
        background-color: #E9EAEA;
        display: flex;
        justify-content: center;
        padding: 12px;
    }

    h1{
        font-weight: bold;
    }
`