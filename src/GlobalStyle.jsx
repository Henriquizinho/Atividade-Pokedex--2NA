import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
}

a:hover {
    color: #CCC;
}
`