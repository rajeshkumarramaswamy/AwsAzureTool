import React, {Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import CustomTable from './CustomTable';

import AzureForm from './AzureForm';
import { CircularProgress } from '@material-ui/core';

const AwsForm = lazy(() => import('./AwsForm'));


const tabStyle = {
  display: '-webkit-inline-box'
}

function TabContainer(props) {
  return (
    <div style={tabStyle}>
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="AWS" href="AWS" />
              <LinkTab label="AZURE" href="Azure" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
            <Suspense fallback={<CircularProgress />}>
            <AwsForm />
            </Suspense>
          </TabContainer>}
          {value === 1 && <TabContainer>
            <AzureForm />
            
          </TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);