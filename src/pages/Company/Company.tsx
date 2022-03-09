import { Divider, Grid, List, ListItem, ListItemText, Paper, Stack, Tabs, Typography } from '@mui/material'
import React from 'react';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};
interface CompanyState {
    isHelpDesk: boolean,
    isWhoWeAre: boolean,
    isHowToCraft: boolean,
    isHowToCreateChest: boolean,
    isHowToCreateNft: boolean
}
const Company = () => {
    const [tabs, setTabs] = React.useState<CompanyState>({
        isHelpDesk: true,
        isWhoWeAre: false,
        isHowToCraft: false,
        isHowToCreateChest: false,
        isHowToCreateNft: false
    });

    function SetTab(propName: string) {
        setTabs({
            isHelpDesk: false,
            isWhoWeAre: false,
            isHowToCraft: false,
            isHowToCreateChest: false,
            isHowToCreateNft: false,
            [propName]: true
        });
    }
    return (
        <Grid container direction={"row"}>
            <Grid item xs={3}>
                <Paper sx={{ padding: 2 }}>
                    <List sx={style} component="nav" aria-label="Help Desk">
                        <ListItem button divider onClick={() => SetTab("isHelpDesk")}>
                            <ListItemText primary="Help Desk" />
                        </ListItem>
                        <ListItem button divider onClick={() => SetTab("isWhoWeAre")}>
                            <ListItemText primary="Who We Are" />
                        </ListItem>
                        <ListItem button divider onClick={() => SetTab("isHowToCraft")}>
                            <ListItemText primary="How To Craft" />
                        </ListItem>
                        <ListItem button divider onClick={() => SetTab("isHowToCreateChest")}>
                            <ListItemText primary="How To Create Chest" />
                        </ListItem>
                        <ListItem button divider onClick={() => SetTab("isHowToCreateNft")}>
                            <ListItemText primary="How To Create NFT" />
                        </ListItem>
                    </List>
                </Paper>
            </Grid>
            <Grid item xs={9} paddingLeft={5}>
                <Typography variant={"h5"} hidden={!tabs.isHelpDesk}>
                    Help Desk
                </Typography>
                <Typography variant={"h5"} hidden={!tabs.isWhoWeAre}>
                    Who We Are
                </Typography>
                <Typography variant={"h5"} hidden={!tabs.isHowToCraft}>
                    How To Craft
                </Typography>
                <Typography variant={"h5"} hidden={!tabs.isHowToCreateChest}>
                    How To Create Chest
                </Typography>
                <Typography variant={"h5"} hidden={!tabs.isHowToCreateNft}>
                    How To Create NFT
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Company