
import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from './projects/ProjectList';
import ProjectDetail from './projects/ProjectDetail';

import NewProjectControl from './newproject/NewProjectControl';



function User(props){

  let selectedProjectContent = null;
  if (props.selectedProject != null){
    selectedProjectContent =  <ProjectDetail selectedProject={props.projectList[props.selectedProject]}/>;
  }
  return (
    <div>

      <h1> Add New Project</h1>
      <NewProjectControl/>
      <h1> Your Projects</h1>
      <ProjectList
        projectList={props.projectList}
        currentRouterPath={props.currentRouterPath}
        onProjectSelection={props.onProjectSelection}/>
      <div>
        {selectedProjectContent}
      </div>
    </div>
  );
}

User.propTypes = {
  projectList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onProjectSelection: PropTypes.func.isRequired,
  selectedProject: PropTypes.string
};


export default User;
