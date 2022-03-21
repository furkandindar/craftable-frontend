import { useState, useMemo } from 'react';
import "./App.css";
import { Grid, Paper} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar, { ColorModeContext } from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";
import UcBreadcrumbs from './shared/Breadcrumb';

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
          },
          // background: {
          //   default: "#F9F9F9",
          //   paper: "#F9F9F9",
          // }
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
          },
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
            <Paper square sx={mode === "light" ? {background:"#f9f9f9"} : {background:"#121212"}}>
                <Grid container direction="column" spacing={3}>
                    <Grid item>
                        <NavBar />
                    </Grid>
                    <Grid item container >
                        <Grid item xs={1.25}></Grid>
                        <Grid item xs={9.5} container direction="column" spacing={3}>
                            <Grid item>
                                <UcBreadcrumbs></UcBreadcrumbs>
                            </Grid>
                            <Grid item container>
                                <Outlet/>
                            </Grid>
                        </Grid>
                        <Grid item xs={1.25}></Grid>
                    </Grid>
                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
