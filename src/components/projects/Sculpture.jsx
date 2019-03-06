
import React from 'react';
import PropTypes from 'prop-types';

function Sculpture(props){
  return (
    <div>
      <h3>{props.title} - {props.medium}</h3>
      <ul>
        {props.notes.map(function(note, index){
          return React.createElement('li', {index}, note);
        })}
      </ul>
      <hr/>
    </div>
  );
}

Sculpture.propTypes = {
  title: PropTypes.string,
  medium: PropTypes.string,
  notes: PropTypes.array
};

export default Sculpture;