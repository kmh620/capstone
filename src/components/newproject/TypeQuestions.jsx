
import React from 'react';
import PropTypes from 'prop-types';


class TypeQuestions extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewMenu: false,
      selectProject: 'none'
    };
    this.viewMenu = this.viewMenu.bind(this);
    this.select = this.select.bind(this);
  }
  
  viewMenu(event) {
    event.preventDefault();
    if (this.state.viewMenu === false){
      this.setState({viewMenu: true});
    } else {
      this.setState({viewMenu: false});
    }
  }
  
  select(event) {
    this.setState({selectProject: event.target.innerText});
  }
  
  render () {
    return (
      <div>
        <button onClick={this.viewMenu}>
          Select Type:
        </button>
         
        {this.state.viewMenu ? (
          <div className="menu">
            <button onClick={this.select}>Painting</button>
            <button onClick={this.select}>Sculpture</button>
            <button onClick={this.select}>Other</button>
          </div> ) : 
          ( null )}
      </div>
    );
  
  }
}

TypeQuestions.propTypes = {
  onFormSelect: PropTypes.func
};

export default TypeQuestions;