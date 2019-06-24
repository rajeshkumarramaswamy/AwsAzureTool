import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const root = {

}

const paper = {
  padding: '12px',
  textAlign: 'center',
  color: 'blue',
}

const FormRow = () => {
  return (
    <React.Fragment>
      <Paper>item</Paper>
  </React.Fragment>
  );
}


class ExampeComp extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div>
      <Grid container  justify="center" spacing={3}>
        <Grid item xs={2}>
          <FormRow />
          <FormRow />
          <FormRow />
        </Grid>
        <Grid item xs={2}>
          <FormRow />
        </Grid>
        <Grid item xs={2}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
     );
  }
}
 
export default ExampeComp;

