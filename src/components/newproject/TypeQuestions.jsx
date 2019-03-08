
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
    this.setState({selectProject: event.target.value});
    console.log(event.target.value);
  }

  render () {
    return (
      <div>
        <select defaultValue={this.state.selectProject}
          onChange={this.select}
        >
          <option>Select:</option>
          <option value="Painting">Painting</option>
          <option value="Other">Other</option>
        </select>
        <p></p>
      </div>
    );

  }
}

TypeQuestions.propTypes = {
  onFormSelect: PropTypes.func
};

export default TypeQuestions;


/*    <button onClick={this.viewMenu}>
      Select Type:
    </button>

    {this.state.viewMenu ? (
      <div className="menu">
        <button onClick={this.onFormSelect}>Painting</button>
        <button onClick={this.onFormSelect}>Sculpture</button>
        <button onClick={this.onFormSelect}>Other</button>
      </div> ) :
      ( null )}*/
