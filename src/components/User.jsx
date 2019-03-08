
import React from 'react';
import ProjectTypeList from './projects/ProjectTypeList';
import NewProjectControl from './newproject/NewProjectControl';



function User(){
  return (
    <div>
      <h1> Add New Project</h1>
      <NewProjectControl/>
      <h1> Your Projects</h1>
      <ProjectTypeList/>

      <h1>Your Series</h1>

    </div>
  );
}

export default User;
