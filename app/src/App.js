import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import Home from "./components/pages/home";
import useTheme from "./hooks/useTheme";
import usePokemonByType from "./hooks/usePokemonByType";
import backgroundDetail from "./assets/images/background.png";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
            box-sizing: border-box;
  }
  html{
    display:block;
    display:flex;
    align-items: center;
    justify-content: center;

  }
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    max-width: 100%;
    width:100%;
    background: ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`};
    background: -moz-linear-gradient(top,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%, ${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%, ${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    background: -webkit-linear-gradient(top,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%,${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%,${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    background: linear-gradient(to bottom,  ${(props) =>
      props.degradeColor1 ? props.degradeColor1 : `black`} 0%,${(props) =>
  props.degradeColor2 ? props.degradeColor2 : `black`} 48%,${(props) =>
  props.degradeColor1 ? props.degradeColor1 : `black`} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${(
      props
    ) =>
      props.degradeColor1 ? props.degradeColor1 : `black`}', endColorstr='${(
  props
) => (props.degradeColor1 ? props.degradeColor1 : `black`)}',GradientType=0 );

    background-position: center;
    background-size:contain;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #root{
    background-image: url(${backgroundDetail});
    background-position: center;
    background-repeat: repeat-x;
    background-attachment: fixed;
    max-width:1200px;
    margin:0 auto;
    flex:1;
  }
`;

function App() {
  const theme = useSelector((state) => state.theme);

  useTheme(process.env.REACT_APP_POKEMON_THEME);
  usePokemonByType();

  return (
    <Router>
      <GlobalStyle
        degradeColor1={theme.degradeColor1}
        degradeColor2={theme.degradeColor2}
      />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
