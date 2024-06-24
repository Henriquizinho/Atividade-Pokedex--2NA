import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

import * as S from '../styles/scrollButtonStyle'

function ScrollButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function toggleVisibility() {
        if (window.scrollY > 400) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }


    return (
        <S.ScrollButton onClick={scrollToTop} $isVisible={isVisible}><FaArrowUp /></S.ScrollButton>
    )
}

export default ScrollButton