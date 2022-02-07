import React, { useState, useMemo } from 'react';
import "./App.css";
import { Typography, Grid, Button, Paper, Switch, Box, Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar, { ColorModeContext } from './components/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import backgroundImg from "./assets/backgroundImg.png"
import MarketPlace from './pages/MarketPlace/MarketPlace';
import NftDetail from './pages/NftDetail/NftDetail';

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
      <ThemeProvider theme={theme}>
        <Paper square>
          <Grid container direction="column" spacing={8}>
            <Grid item xs={12}>
              <NavBar/>
            </Grid>
            <Grid item container xs={12} sx={{backgroundColor:"#f9f9f9"}}>
              <Grid item xs={1.25}></Grid>
              <Grid item xs={9.5}>
                <Container maxWidth="xl">
                  {/* <Home/> */}
                  {/* <MarketPlace/> */}
                  <NftDetail/>
                </Container>
              </Grid>
              <Grid item xs={1.25}></Grid>
            </Grid>
            <Grid item xs={12}>
              <Footer/>
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
