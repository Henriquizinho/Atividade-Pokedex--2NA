import React from 'react'
import * as S from '../styles/footerStyle'

import ColorDots from '/color-dots.svg'

function Footer() {
    return (
        <S.Footer>
            <img src={ColorDots} />
            <div>
            Design e Código feito por: <a href="https://github.com/guiisbarbosa" target='_blank'>Guilherme Barbosa</a>
            </div>
        </S.Footer>
    )
}

export default Footer