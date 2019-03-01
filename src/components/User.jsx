
import React from 'react';
import NewProjectControl from './newproject/NewProjectControl';
import ProjectTypeList from './projects/ProjectTypeList';
import SeriesList from './SeriesList';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
    
      <Switch>
        <Route exact path='/' component={ProjectTypeList} />
        <Route exact path='/series' component={SeriesList} />
        <Route exact path='/newproject' component={NewProjectControl} />
      </Switch>
    </div>
  );
}

export default App;
