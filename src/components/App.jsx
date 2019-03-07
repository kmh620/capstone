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
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }

  showRegisterBox() {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }

  render() {

    return (
      <div className='root-container'>
        <Header/>
        <br/>
        <div className="box-container">
          {this.state.isLoginOpen && <LoginBox/>}
          {this.state.isRegisterOpen && <RegisterBox/>}
        </div>
        <div className="box-controller">
          <div
            className={'controller ' + (this.state.isLoginOpen
              ? 'selected-controller'
              : '')}
            onClick={this
              .showLoginBox
              .bind(this)}>
           Login
          </div>
          <div
            className={'controller ' + (this.state.isRegisterOpen
              ? 'selected-controller'
              : '')}
            onClick={this
              .showRegisterBox
              .bind(this)}>
           Register
          </div>
        </div>
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
}

export default App;
