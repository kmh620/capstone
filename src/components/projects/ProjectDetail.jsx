
import React from 'react';
import PropTypes from 'prop-types';


function ProjectDetail(props){
  return (
    <div>
      <h3>Project Detail</h3>
      <hr/>
      <h1>{props.selectedProject.title} - {props.selectedProject.medium}</h1>
      <p>{props.selectedProject.notes}</p>
      <hr/>

    </div>
  );
}

ProjectDetail.propTypes = {
  selectedProject: PropTypes.object
};

export default ProjectDetail;
