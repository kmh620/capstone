
import React from 'react';
import PropTypes from 'prop-types';

function Painting(props){
return (
<div>
  <h3>{props.title} - {props.medium}</h3>
  <p>{props.notes}</p>
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