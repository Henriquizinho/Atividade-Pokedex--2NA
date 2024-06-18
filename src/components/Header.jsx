import { useContext } from 'react'
import * as S from '../styles/headerStyle'

import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

import PokeballIcon from '/pokeball-icon.svg'

import { ThemeContext } from '../contexts/ThemeContext'


function Header({ setSearch }) {
    const handleInputSearch = (e) => {
        setSearch(e.target.value)
    }

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <S.HeaderContainer>
            <div className="sidebar"><a href='#'><img src={PokeballIcon} width={50} height={50} /></a></div>
            <div className="topbar" />
            <S.Navigation>
                <a href='#'><TiHome /> Página Inicial</a>
                <S.RightMenu>
                    <S.SearchBar>
                        <div className="iconSearch"><IoSearchSharp /></div>
                        <input type="text" name="search" placeholder='Procurar...' onChange={handleInputSearch}/>
                    </S.SearchBar>
                    <S.SwitchButton>
                        <input type="checkbox" onChange={toggleTheme}/>
                        <span className="slider" />
                    </S.SwitchButton>
                </S.RightMenu>
            </S.Navigation>
        </S.HeaderContainer>
    )
}

export default Header