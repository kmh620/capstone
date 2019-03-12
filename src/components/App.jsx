import React from 'react';
import Header from './Header';
import Home from './Home';
import User from './User';
import ProjectDetail from './projects/ProjectDetail';
import PaintForm from './newproject/PaintForm';
import OtherForm from './newproject/OtherForm';

import { Switch, Route } from 'react-router-dom';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className='root-container'>
        <Header/>
        <br/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/userpage' component={User} />
          <Route path='/project-detail' component={ProjectDetail} />
          <Route path='/paint-form' component={PaintForm} />
          <Route path='/other-form' component={OtherForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
