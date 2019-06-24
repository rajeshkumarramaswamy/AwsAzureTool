import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as constants from './constants';
import CustomTable from './CustomTable';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Fab } from '@material-ui/core';
import { debounce } from 'lodash';
var AWS = require('aws-sdk');



  

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: 21,
    },

      
});


class AwsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ak: '',
            sk: '',
            isLoading: false,
            result: false,
            regions: false,
            apiError: false,
        };
      }

    
    componentWillMount() {
        this.delayedCallback = debounce((name, event) => {
            // `event.target` is accessible now
            this.setState({[name]: event.target.value})
        }, 100);
    }



    handleChange = name => event => {
        event.persist()
        this.delayedCallback(name, event);
        // debounce(this.setState({[name]: event.target.value,}), 3000)
        // this.setState({[name]: event.target.value,});
    };


    handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
      
          this.setState({ apiError: false });
    };

    handleSubmit = () => {
        let self = this;
        self.setState({isLoading: true, })
        AWS.config = new AWS.Config();
        AWS.config.accessKeyId = self.state.ak;
        AWS.config.secretAccessKey = self.state.sk;
        AWS.config.region = "us-east-1";
        let ec2 = new AWS.EC2({region: 'us-east-1', maxRetries: 15, apiVersion: '2014-10-01'});
        const params = {}
        ec2.describeRegions(params, function(err, data) {
            if (err) console.log(err, err.stack); // an error occurred
            else      self.setState({regions: data})   
        });
        
        ec2.describeInstances(params, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                self.setState({apiError: true, isLoading: false})
            } else {
                self.setState({result: data['Reservations'], apiError:false, isLoading: false})           
            }
        });
    }

    render() {
        const { classes } = this.props;
        const { ak, sk, isLoading, result, apiError, regions } = this.state;
        let objResult = [];
        let allowed = ['InstanceId', 'KeyName','InstanceType', 'Platform']
        let header = result && result.map((instances) => {
            // console.log(Object.keys(instances['Instances'][0]).filter(key => allowed.includes(key)))
            // let obj = instances['Instances'][0];
            objResult.push(instances['Instances'][0])
        })
        console.log('^^^^^^', objResult);
        return (
            <>
            <Grid
                container
                direction="row"
                justify="center"
            
            >
                <form noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Access Key"
                        className={classes.textField}
                        // value={this.state.ak}
                        defaultValue=''
                        onChange={this.handleChange('ak')}
                        // onChange={debounce(this.handleChange('ak'), 2000)}
                        margin="normal"
                        variant="outlined"
                        type="password"
                    />

                    <TextField
                        id="outlined-name"
                        label="Secret Key"
                        className={classes.textField}
                        // value={this.state.sk}
                        defaultValue=''
                        onChange={this.handleChange('sk')}
                        margin="normal"
                        variant="outlined"
                        type="password"
                    />
                    
                    <Fab
                        variant="extended"
                        size="small"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleSubmit}
                        disabled={!ak || !sk}
                    >
                        Go
                    </Fab>
                </form>
                {
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        autoHideDuration={2000}
                        open={apiError}
                        message="Invalid credentials"
                        onClose={this.handleSnackBarClose}
                    />
                }
                
                {
                    result && !isLoading && 
                    <div>
                        <CustomTable headerList={objResult} bodyObj={objResult} />
                    </div>
                }
                
            </Grid>
            <Grid>
                {
                    isLoading ?
                    <CircularProgress /> : null
                }
            </Grid>
            </>
        );
    }
}

AwsForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AwsForm);
