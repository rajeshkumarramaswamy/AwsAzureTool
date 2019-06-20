import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import * as constants from './constants';
// let jsonObject = {"data": [{"InstanceName": "ansible", "InstanceType": "Standard_B1ms", "OSType": "Linux", "SKU": "7.4", "ExpressCloudSupported": "No"}, {"InstanceName": "ansible-winclnt", "InstanceType": "Standard_DS1_v2", "OSType": "Windows", "SKU": "2012-R2-Datacenter", "ExpressCloudSupported": "Yes"}, {"InstanceName": "OMS-Test-Dashboard", "InstanceType": "Standard_B1s", "OSType": "Linux", "SKU": "7.4", "ExpressCloudSupported": "No"}, {"InstanceName": "win2016", "InstanceType": "Standard_B2ms", "OSType": "Windows", "SKU": "Data unavailable", "ExpressCloudSupported": "Yes"}, {"InstanceName": "demouser-vm", "InstanceType": "Standard_DS1_v2", "OSType": "Linux", "SKU": "16.04-LTS", "ExpressCloudSupported": "No"}]};




const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() { 

    const {classes, bodyObj, headerList} = this.props;

    return ( 
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {bodyObj &&
          <TableRow>
            {
              headerList && headerList.map((name, i) => i === 0 ?  <TableCell>{name}</TableCell> : <TableCell align="right" >{name}</TableCell>)
            }
            {/* <TableCell>InstanceName</TableCell>
            <TableCell align="right">InstanceType</TableCell>
            <TableCell align="right">OSType</TableCell>
            <TableCell align="right">SKU</TableCell>*/}
            {headerList ? <TableCell align="right">ExpressCloudSupported</TableCell> : null}
          </TableRow>
          }
        </TableHead>
        <TableBody>
          {bodyObj && bodyObj.map(row => (
            <TableRow key={row.InstanceId}>
              <TableCell component="th" scope="row">{row.InstanceId}</TableCell>
              <TableCell align="right">{row.KeyName}</TableCell>
              <TableCell align="right">{row.InstanceType}</TableCell>
              <TableCell align="right">{row.Platform ? row.Platform: 'None'}</TableCell>
              <TableCell align="right">{row.SKU}</TableCell>
              <TableCell component="th" scope="row">{ (constants.AWS_SUPPORTED.indexOf(row.InstanceType) > -1 && constants.SUPPORTED_OS.indexOf(row.Platform) > -1) ? 'Yes': 'No'  }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
     );
  }
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(CustomTable);


