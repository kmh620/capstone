import React from 'react';
import Main from './Main';
import Header from './Header';

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
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/userpage' component={User} />
        <Route path='/other-projects' component={OtherList} />
        <Route path='/painting-projects' component={PaintList} />
        <Route path='/sculpture-projects' component={SculptureList} />
        <Route path='/other-form' component={OtherForm} />
        <Route path='/sculpture-form' component={SculptureForm} />
      </Switch>
    </div>
  );
}

export default App;
