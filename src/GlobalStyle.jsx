import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

a {
    text-decoration: none;
    color: #fff;
}

a:hover {
    color: #CCC;
}
`