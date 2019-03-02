
import React from 'react';
import PropTypes from 'prop-types';

function Painting(props){
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

Painting.propTypes = {
title: PropTypes.string,
medium: PropTypes.string,
notes: PropTypes.array
};

export default Painting;
