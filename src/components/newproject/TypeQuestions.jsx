
import React from 'react';


class TypeQuestions extends React.Component {
  
  constructor() {
    super();
    this.state = {
      viewMenu: false,
    };
    this.viewMenu =this.viewMenu.bind(this);
  }
  
  viewMenu(event) {
    event.preventDefault();
    if (this.state.viewMenu === false){
      this.setState({viewMenu: true});
    } else {
      this.setState({viewMenu: false});
    }
  }
  
  
  render () {
    return (
      <div>
        <button onClick={this.viewMenu}>
          Select Type:
        </button>
         
        {this.state.viewMenu ? (
          <div className="menu">
            <button>Painting </button>
            <button>Sculpture</button>
            <button>Other</button>
          </div> ) : 
          ( null )}
      </div>
    );
  
  }
}

export default TypeQuestions;