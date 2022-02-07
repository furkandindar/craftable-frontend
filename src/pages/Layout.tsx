import React, { FC } from 'react';
import { Home } from '@mui/icons-material';
import { Paper, Grid, ThemeProvider } from '@mui/material';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import UcBreadcrumbs from '../shared/Breadcrumb';


interface LayoutCompProps {
    childComponent: React.ReactNode;
    theme: any;
}
const Layout: React.FC<LayoutCompProps> = (props) => {
    const { childComponent, theme } = props;

    return (
        <ThemeProvider theme={theme}>
            <Paper square>
                <Grid container direction="column" spacing={8}>
                    <Grid item xs={12}>
                        <NavBar />
                    </Grid>
                    <Grid item container xs={12}>
                        <Grid item xs={0} md={1.25}></Grid>
                        <Grid item xs={12} md={9.5} container>
                            <Grid item >
                                <UcBreadcrumbs></UcBreadcrumbs>
                            </Grid>
                            <Grid item >
                                {childComponent}
                            </Grid>
                        </Grid>
                        <Grid item xs={0} md={1.25}></Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Paper>
        </ThemeProvider>

    )
};

export default Layout;

