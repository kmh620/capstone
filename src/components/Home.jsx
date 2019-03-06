import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import About from './About';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

function Home() {

  return (
    <Grid container className={styles.root}>
      <Grid
        container
        spacing={16}
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <About/>
      </Grid>
      <Grid
        container
        spacing={16}
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <h1>Login</h1>
      </Grid>
      <Grid
        container
        spacing={16}
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <h1>Sign up</h1>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Home);
  
  
  
  
  
  
  
  
  
  
  