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


showLoginBox() {
  this.setState({isLoginOpen: true, isRegisterOpen: false});
}

showRegisterBox() {
  this.setState({isRegisterOpen: true, isLoginOpen: false});
}


this.state = {
  isLoginOpen: true,
  isRegisterOpen: false
