import styled from "styled-components";


export const ScrollButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: ${props => props.theme.primaryBG};
    position: fixed;
    bottom: 12px;
    right: 12px;
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.mainText};
    cursor: pointer;
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
`