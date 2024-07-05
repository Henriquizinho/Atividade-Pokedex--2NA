import React from 'react'
import * as S from '../styles/footerStyle'

import ColorDots from '/color-dots.svg'

function Footer() {
    return (
        <S.Footer>
            <img src={ColorDots} />
            <div>
            Designed and coded with care by: <a href="https://github.com/guiisbarbosa" target='_blank'>Guilherme Barbosa</a>
            </div>
        </S.Footer>
    )
}

export default Footer