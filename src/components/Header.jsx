import { useContext } from 'react'
import * as S from '../styles/headerStyle'
import { Link, useLocation } from 'react-router-dom'

import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

import PokeballIcon from '/pokeball-icon.svg'

import { ThemeContext } from '../contexts/ThemeContext'


function Header({ setSearch }) {
    const location = useLocation();
    const showSearch = location.pathname === '/'

    const handleInputSearch = (e) => {
        setSearch(e.target.value)
    }

    const { toggleTheme } = useContext(ThemeContext)

    return (
        <S.HeaderContainer>
            <div className="sidebar"><img src={PokeballIcon} width={50} height={50} /></div>
            <div className="topbar" />
            <S.Navigation>
                <Link to='/'><TiHome /> Home</Link>
                <S.RightMenu>
                {showSearch && <S.SearchBar>
                        <div className="iconSearch"><IoSearchSharp /></div>
                        <input type="text" name="search" placeholder='Search by name' onChange={handleInputSearch}/>
                    </S.SearchBar>}
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