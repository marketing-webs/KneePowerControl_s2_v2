
import { createGlobalStyle } from "styled-components";
import { mediaQueries } from "./mediaQueries";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../../../node_modules/video-react/dist/video-react.css"

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');


*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    background-color: #fff;
    position: relative;
    overflow-x: hidden;
    font-family: 'Montserrat', sans-serif;
  }
p,
a,
ul,
li {
  text-decoration: none;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
    line-height: 1.5;
    /* max-width: 42em; */
    ${mediaQueries("md")`
      font-size: 19px;
    `}
}
a {
  cursor: pointer;
  margin-top: 0px;
}
img {
  width: 100%;
}
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};

h1 {
  font-size: 30px;
  text-align: left;
  font-weight: 400;
  ${mediaQueries("xs")`
     font-size: 58px;
    margin-top: 30px;
    margin-bottom: 25px;
    line-height: 1;
  `}
  span {
    color: #163fab;
  }
}

h2 {
  font-size: 28px;
  text-align: left;
  margin: 10px 0px;
  font-weight: 700;
  text-shadow: 2px 2px 5px rgb(0 0 0);
      ${mediaQueries("sm")`
      font-size: 40px;
    `}
}

h3 {
  font-size: 18px;
  text-align: left;
  margin: 10px 0px;

      ${mediaQueries("sm")`
      font-size: 24px;
    `}
}

input {
  background-color: transparent;
}

/* .firstFrom {
  ${mediaQueries("sm")`
  margin-top: 40px;
  transform: translate(20%, 10%);
`}
 @media (min-width: 1440px) {
  transform: translate(30%, 70%);
  }
 @media (min-width: 2560px) {
  transform: translate(30%, 70%);
  }
} */






// Slick css

.slick-dots {
  position: relative;
    bottom: -50px;
    right: 63px;
    display: block;
    width: 220px;
    padding: 0;
    margin: auto;
    list-style: none;
    text-align: center;
}

.slick-dots li button:before{
    font-size: 10px;
    width: 150px;
    margin: auto;
   color: #F9BA20;
}        

.Control-bar {
  display: none;
}

.MuiOutlinedInput-root {
    border-radius: 15px !important;
}

.MuiInputLabel-shrink {
  transform: translate(13px, -12px) scale(0.75) !important;     
}

`;
