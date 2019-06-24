import React, { Component, lazy } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormComponent from './FormComponent';
import Navbar from './Navbar';
import SemMainComponent from '../SemanticComponents/SemMainComponent';

const AwsForm = lazy(() => import('../AwsForm'));

function LinkTab(props) {
    return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
  }

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };


    render() {
        const { value } = this.state;
        return (
            <div>
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
                                <Tabs variant="standard" value={value} onChange={this.handleChange}>
                                    <LinkTab label="AWS" href="AWS" />
                                    <LinkTab label="AZURE" href="Azure" />
                                </Tabs>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                {/* <Navbar showForm={value} /> */}

                <FormComponent showForm={value} />

                <SemMainComponent />
            </div>
        );
    }
}

export default MainComponent;