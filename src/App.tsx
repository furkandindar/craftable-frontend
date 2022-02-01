import React, { useState, useMemo } from 'react';
import "./App.css";
import { Typography, Grid, Button, Paper, Switch} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar, { ColorModeContext } from './components/NavBar';
import Home from './pages/Home/Home';
import Footer from './components/Footer';

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
            main: "#82368C"
          },
          secondary: {
            main: "#82368C"
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
            <Grid item container xs={12}>
              <Grid item xs={0} md={2}></Grid>
              <Grid item xs={12} md={8}>
                <Home/>
              </Grid>
              <Grid item xs={0} md={2}></Grid>
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
