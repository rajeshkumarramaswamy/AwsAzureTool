import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CustomTable from './CustomTable';
import * as constants from './constants';
import { debug } from 'util';
import { Grid, Fab } from '@material-ui/core';
var AuthenticationContext = require('adal-node').AuthenticationContext;
// const msRestAzure = require('ms-rest-azure')
// const ComputeManagementClient = require('azure-arm-compute')
const request = require('request');


const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCIsImtpZCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuY29yZS53aW5kb3dzLm5ldC8iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC85OTAwZjY5Yi1jZmEyLTQzYTctOTUzYy03YzYwNzZhNmI4NTYvIiwiaWF0IjoxNTU3MjA5MTY2LCJuYmYiOjE1NTcyMDkxNjYsImV4cCI6MTU1NzIxMzA2NiwiYWlvIjoiNDJaZ1lOQzRFK1BCemJkYll5WG5xeVhWcVdlTEFBPT0iLCJhcHBpZCI6IjAxNWI1YTZkLTM5NDEtNGMzYi04YTU0LTk0Zjc5OWRjODRmMSIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0Lzk5MDBmNjliLWNmYTItNDNhNy05NTNjLTdjNjA3NmE2Yjg1Ni8iLCJvaWQiOiJhNGY3NDlhZi1jYWJhLTQ0YTMtODA4ZS00NmZmY2ExZTIwNWYiLCJzdWIiOiJhNGY3NDlhZi1jYWJhLTQ0YTMtODA4ZS00NmZmY2ExZTIwNWYiLCJ0aWQiOiI5OTAwZjY5Yi1jZmEyLTQzYTctOTUzYy03YzYwNzZhNmI4NTYiLCJ1dGkiOiJMam5ablNfbnVVeWFISVhpLTNScUFBIiwidmVyIjoiMS4wIn0.NmPa2WLE3OSPKFZVZ-Z-Cpu-pW3vCvqtOSZK1lb1i4PHmrvKx64GNQMSAhIjEmNrZY5ChaLXMJBOqT6yHNMG4f_nV3KYLRilmrM2OX47LGFGhia1J02KdqHGwuYnjQM5LbYRHehlW25O2TKGjXmaPtabD4xu8vjewkfWcQFg3n3Wywgm-O7domvQerKFgZhvhtjrnc993WSFkYIW1dI0OycviqpFR951stG9tERvx0RC2f0SzwS5da--a3JrRuSArZpBGQKMOzOs5vLUO33kefT7mZNNV-7Rt6hiKP530VKKlTgCNVbIb3ysPQIrkYXpXqq9rdbrQ21S1yj1owWTOw"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
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
    formDiv: {

    },
    button: {
        margin: 21,
    },
});


class AwsForm extends React.Component {
    state = {
        ak: '',
        ci: '',
        ti: '',
        si: '',
        showTable: false,
        isLoading: false,
        result: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = event => {
        // const endpoint = `https://login.microsoftonline.com/${constants.az_tenant_id}/oauth2/token`;
        // const requestParams = {
        //     grant_type: "client_credentials",
        //     client_id: constants.az_client_id,
        //     client_secret: constants.az_application_secret,
        //     resource: constants.az_resource
        // };

        // request.post({
        //     url: endpoint, form: requestParams, headers: {
        //         'Content-Type': 'application/json',
        //         "Accept": 'application/json',
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Access-Control-Allow-Credentials' : true,
        //         'Access-Control-Allow-Origin':'*',
        //         'Access-Control-Allow-Methods':'GET',
        //         'Access-Control-Allow-Headers':'application/json',
        //     },
        // }, function (err, response, body) {
        //     if (err) {
        //         console.log("error");
        //     }
        //     else {
        //         console.log(response.body);
        //         let parsed = JSON.stringify(response)
        //         console.log("Response=" + parsed);
        //         if (parsed.error_description) {
        //             console.log("Error=" + parsed.error_description);
        //         }
        //         else {
        //             console.log("Access Token=" + parsed.access_token);
        //         }
        //     }
        // });

        // const headers = {
        //     'Content-Type': 'text/plain',
        //     'X-My-Custom-Header': 'value-v',
        //     'Authorization': 'Bearer ' + access_token
        // }
        // let az_resource = 'https://management.core.windows.net/';
        // let az_client_id = "015b5a6d-3941-4c3b-8a54-94f799dc84f1";
        // let az_application_secret= "udU5FGjGaoUOhyH0rPIHRd4UMe2ZPkXzdbirnWSNWwE=";
        // let az_tenant_id = "9900f69b-cfa2-43a7-953c-7c6076a6b856";
        // let az_authentication_endpoint = 'https://login.microsoftonline.com/';
        // debugger;
        // let context = new AuthenticationContext("https://login.windows.net/" + az_tenant_id);
        // context.acquireTokenWithClientCredentials(az_resource, az_client_id, az_application_secret, function(err, tokenResponse) {
        //     debugger;
        //     if (err) {
        //       console.log('well that didn\'t work: ' + err.stack);
        //     } else {
        //       console.log(tokenResponse);
        //     }
        // });  


        var authorityHostUrl = 'https://login.windows.net/';
        var tenant = '9900f69b-cfa2-43a7-953c-7c6076a6b856'; // AAD Tenant name.
        var authorityUrl = authorityHostUrl + tenant;
        var applicationId = '015b5a6d-3941-4c3b-8a54-94f799dc84f1'; // Application Id of app registered under AAD.
        var clientSecret = 'udU5FGjGaoUOhyH0rPIHRd4UMe2ZPkXzdbirnWSNWwE='; // Secret generated for app. Read this environment variable.
        var resource = 'https://management.core.windows.net/'; // URI that identifies the resource for which the token is valid.

        var context = new AuthenticationContext(authorityUrl);

        context.acquireTokenWithClientCredentials(resource, applicationId, clientSecret, function (err, tokenResponse) {
            if (err) {
                console.log('well that didn\'t work: ' + err.stack);
            } else {
                console.log(tokenResponse);
            }
        });


        // fetch(constants.AZURE_API.vm, {
        //         method: 'GET',
        //         mode: 'no-cors',
        //         redirect: 'follow',
        //         headers: new Headers({
        //                 'Content-Type': 'text/plain',
        //                 'X-My-Custom-Header': 'value-v',
        //                 'Authorization': 'Bearer ' + access_token,
        //         }),
        //     })
        //     .then(response => response.json())
        //     .then((data) => this.setState({result: data}))

    };

    render() {
        const { classes } = this.props;
        const { ak, ci, ti, si, result } = this.state;
        console.log(result);
        return (
            <Grid
                container
            >
                <div>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Application Secret"
                            className={classes.textField}
                            value={this.state.ak}
                            onChange={this.handleChange('ak')}
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />

                        <TextField
                            id="outlined-name"
                            label="Application Id"
                            className={classes.textField}
                            value={this.state.ci}
                            onChange={this.handleChange('ci')}
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />

                        <TextField
                            id="outlined-name"
                            label="Tenant Id"
                            className={classes.textField}
                            value={this.state.ti}
                            onChange={this.handleChange('ti')}
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />

                        <TextField
                            id="outlined-name"
                            label="Subscription Id"
                            className={classes.textField}
                            value={this.state.si}
                            onChange={this.handleChange('si')}
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />

                        <Fab
                            variant="text"
                            size="small"
                            color='primary'
                            className={classes.button}
                            onClick={this.handleSubmit}
                        // disabled={!ak || !ci || !ti || !si}
                        >
                            Go
                    </Fab>
                    </form>
                </div>
                <div>

                    <CustomTable />
                </div>

            </Grid>
        );
    }
}

AwsForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AwsForm);
