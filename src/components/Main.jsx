import React from 'react';
import About from './About';
import Grid from '@material-ui/core/Grid';

function Main(){
  return (
    <div style={{width: '100%', margin: 'auto'}}>
      <h3>Main App Page</h3>
      <Grid className="main-grid">
        <About/>
        <p><em>Login</em></p>
        <p><em>Create Account</em></p>
      </Grid>
    </div>
  );
}

export default Main;


