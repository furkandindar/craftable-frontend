import React, { useState, useMemo } from 'react';
import "./App.css";
import { Typography, Grid, Button, Paper, Switch, Box, Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar, { ColorModeContext } from './components/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import backgroundImg from "./assets/backgroundImg.png"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './pages/Layout';
import Bond from './pages/Bond/Bond';
import MarketPlace from './pages/MarketPlace/MarketPlace';
import NftDetail from './pages/NftDetail/NftDetail';
import CreateChest from './pages/CreateChest/CreateChest';
import CreateNft from './pages/CreateNft/CreateNft';

//const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  const theme = useMemo(
    () =>
      mode === 'light' ?
      createTheme({
        palette: {
          mode,
          text: {
            secondary: "#82368C"
          },
          primary: {
            main: "#82368C",
            dark: "#5D2664",
          },
          secondary: {
            main: "#E3E3E3",
            dark: "#AFAFAF",
            light: "#707070"
          }
        },
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif'
          ].join(','),
          button: {
            textTransform: "none"
          }
        },
        shape: {
          borderRadius: 10,
        },
      }) :
      createTheme({
        palette: {
          mode,
          text: {
            secondary: "#234555"
          }
        },
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif'
          ].join(','),
          button: {
            textTransform: "none"
          }
        },
        shape: {
          borderRadius: 10,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout childComponent={<Home></Home>} theme={theme} />}/>
          <Route path="/Bond" element={<Layout childComponent={<Bond></Bond>} theme={theme} />} />
          <Route path="/nftDetail" element={<Layout childComponent={<NftDetail/>} theme={theme}/>}/>
          <Route path="/marketplace" element={<Layout childComponent={<MarketPlace/>} theme={theme}/>}/>
          <Route path="/createchest" element={<Layout childComponent={<CreateChest></CreateChest>} theme={theme} />} />
          <Route path="/createnft" element={<Layout childComponent={<CreateNft></CreateNft>} theme={theme} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </ColorModeContext.Provider>
  );
}

export default App;
