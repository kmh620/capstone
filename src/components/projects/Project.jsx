import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {

  const projectInfo =
    <div>
      <h3>{props.title} - {props.medium}</h3>
      <h4>{props.notes}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/userpage'){
    return (
      <div onClick={() => {props.onProjectSelection(props.projectId);}}>
        {projectInfo}
      </div>
    );
  } else {
    return (
      <div>
        {projectInfo}
      </div>
    );
  }
}


Project.propTypes = {
  type: PropTypes.string,
  complete: PropTypes.bool,
  title: PropTypes.string,
  medium: PropTypes.string,
  notes: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onProjectSelection: PropTypes.func,
  projectId: PropTypes.string.isRequired
};

export default Project;
