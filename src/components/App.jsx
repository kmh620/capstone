import React from 'react';
import Main from './Main';
import User from './User';
import OtherList from './projects/OtherList';
import PaintList from './projects/PaintList';
import SculptureList from './projects/SculptureList';
import { Switch, Route } from 'react-router-dom';



function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/userpage' component={User} />
        <Route path='/other-projects' component={OtherList} />
        <Route path='/painting-projects' component={PaintList} />
        <Route path='/sculpture-projects' component={SculptureList} />
      </Switch>
    </div>
  );
}

export default App;
