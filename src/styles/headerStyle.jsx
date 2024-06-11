import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: #E3350D;
    position: relative;

    .sidebar {
        width: 24%;
        height: 100px;
        position: absolute;
        background-color: #A5281C;
        top: 0;
        clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
        display: flex;
        align-items: center;
        padding: 0 4%;
        justify-content: flex-end;
    }

    .topbar {
        width: 100%;
        height: 20px;
        position: absolute;
        background-color: #A5281C;
    }

    img:hover {
        animation: rotate 2s infinite linear;
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media(max-width: 767px) {
        .sidebar {
            display: none;
        }
    }

    @media(max-width: 375px){
        height: 120px;
    }
`
export const Navigation = styled.nav`
    width: 70%;
    height: 80px;
    position: absolute;
    bottom: 0;
    right: 6%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #fff;

    @media(max-width: 767px) {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        right: 0;
    }

    @media(max-width: 375px){
        flex-direction: column;
        height: 100px;
    }
`

export const RightMenu = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 36px;
    flex-shrink: 1;
`

export const SearchBar = styled.div`
    height: 36px;
    width: 240px;
    background-color: #FFF;
    border: 2px solid #000;
    border-radius: 18px 0 0 18px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .iconSearch {
        font-size: 20px;
        color: #000;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid #000;
    }

    input {
        width: 100%;
        height: calc(100% - 4px);
        margin: 4px 4px 4px 6px;
        border: none;
        outline: none;
        color: #707070;
    }

    input::placeholder {
        font-style: italic;
        color: #CCC;
    }
`

export const SwitchButton = styled.label`
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 36px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        border-radius: 50px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 0 20px #ff9b18;
        border: 2px solid #ff8800;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: 4px;
        bottom: 4px;
        background-color: #ffd987;
        border-radius: inherit;
        transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    }

    input:checked + .slider {
        border: 2px solid #2C2C2C;
        box-shadow: none;
    }

    input:checked + .slider:before {
        transform: translateX(24px);
        background-color: #2C2C2C;
    }
`