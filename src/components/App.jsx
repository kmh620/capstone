import React from 'react';

import Header from './Header';
import Home from './Home';

import User from './User';
import OtherList from './projects/OtherList';
import PaintList from './projects/PaintList';
import SculptureList from './projects/SculptureList';
import OtherForm from './newproject/OtherForm';
import PaintForm from './newproject/PaintForm';
import SculptureForm from './newproject/SculptureForm';
import { Switch, Route } from 'react-router-dom';



function App() {

  
  return (
    <div>
      <Header/>
      <br/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/userpage' component={User} />
        <Route path='/other-projects' component={OtherList} />
        <Route path='/painting-projects' component={PaintList} />
        <Route path='/sculpture-projects' component={SculptureList} />
        <Route path='/other-form' component={OtherForm} />
        <Route path='/sculpture-form' component={SculptureForm} />
        <Route path='/paint-form' component={PaintForm} />
      </Switch>
    </div>
  );
}

export default App;
