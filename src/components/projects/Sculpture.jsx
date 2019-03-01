
import React from 'react';
import PropTypes from 'prop-types';

function Sculpture(props){
return (
<div>
  <h3>{props.title} - {props.medium}</h3>
  <p>{props.notes}</p>
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