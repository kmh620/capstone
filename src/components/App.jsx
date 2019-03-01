import React from 'react';
import Main from './Main';
import User from './User';
import { Switch, Route } from 'react-router-dom';



function App() {
  
  return (
    <div>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/userpage' component={User} />
    </Switch>
    </div>
  );
}

export default App;
