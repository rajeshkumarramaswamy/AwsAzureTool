import React, { Component, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const Navbar = () => {

    function LinkTab(props) {
        return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
    }

    const [clickedTab, setClickedTab] = useState(0)

    function toggle() {
        clickedTab === 0 ? setClickedTab(0): setClickedTab(1)
    }

    return ( 
        <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                            Cloud 
                        </Typography>

                        <Grid
                            justify="space-between"
                            container
                            spacing={24}
                        >
                            <Grid item justify="center">
                            </Grid>
                            <Grid item>
                                <Tabs variant="standard" value={clickedTab} onClick={() => toggle}>
                                    <LinkTab label="AWS" href="AWS" />
                                    <LinkTab label="AZURE" href="Azure" />
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;