import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
/*import Image from '../assets/images/project-img/banner.jpg';*/
/*  backgroundImage: `url(${Image})`,*/

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 7,
    margin: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'lightgrey',
  },
});


function Header(props){
  const { classes } = props;

  return (
    <div>

      <Link to="/">Home</Link> | <Link to="/userpage">User</Link>
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
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
