import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      complete: false
    } ;
  }
  
  
  
  

  
  
  render() {
    return (
      <div>
      
      
      </div>
    );
  }

}

Project.propTypes = {
  type: PropTypes.string,
  complete: PropTypes.bool
};

export default Project;