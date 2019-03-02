import React from 'react';
import TypeQuestions from './TypeQuestions';


class NewProjectControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: null
    };
    
  }

  render(){
  
    /* let renderForm =null;
    if project = paint, renderForm = PaintForm */
    
    
    return (
      <div>
        <h1>NewProject control Modal</h1>
        <TypeQuestions/>
        <hr/>
      </div>
    );
  }
}

export default NewProjectControl; 