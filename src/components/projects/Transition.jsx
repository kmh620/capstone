import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
  return <Slide direction="up" {...props} />;
}

Transition.propTypes = {
  title: PropTypes.string,
  medium: PropTypes.string,
  notes: PropTypes.array
};

export default Transition;
