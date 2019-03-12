import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import About from './About';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 20,
    margin: 30,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  
});


function Home(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Paper className={classes.paper}>
            <h1>App Name</h1>
          </Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Paper className={classes.paper}>
            <About/>
          </Paper>
        </Grid>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Paper className={classes.paper}>
            <h1>Login</h1>
          </Paper>
        </Grid>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <Paper className={classes.paper}>
            <h1>Sign up</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
