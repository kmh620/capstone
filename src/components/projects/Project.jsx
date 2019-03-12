import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {

  const projectInfo =
    <div>
      <h3>{props.title} - {props.medium}</h3>
      <hr/>
    </div>;
  return (
    <div>
      {projectInfo}
    </div>
  );
}



Project.propTypes = {
  type: PropTypes.string,
  complete: PropTypes.bool,
  title: PropTypes.string,
  medium: PropTypes.string
};

export default Project;
