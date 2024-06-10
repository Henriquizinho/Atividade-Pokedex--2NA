import React from 'react'
import * as S from '../styles/headerStyle'

import { TiHome } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

import PokeballIcon from '../../public/pokeball-icon.svg'


function Header() {
    return (


        <S.HeaderContainer>
            <div className="sidebar"><a href='#'><img src={PokeballIcon} width={50} height={50} /></a></div>
            <div className="topbar" />
            <S.Navigation>
                <a href='https://google.com'><TiHome /> Página Inicial</a>
                <S.RightMenu>
                    <S.SearchBar>
                        <div className="iconSearch"><IoSearchSharp /></div>
                        <input type="text" name="search" placeholder='Procurar...' />
                    </S.SearchBar>
                    <S.SwitchButton>
                        <input type="checkbox" />
                        <span class="slider" />
                    </S.SwitchButton>
                </S.RightMenu>
            </S.Navigation>
        </S.HeaderContainer>
    )
}

export default Header