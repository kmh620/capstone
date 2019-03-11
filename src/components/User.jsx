
import React from 'react';
import ProjectList from './projects/ProjectList';
import NewProjectControl from './newproject/NewProjectControl';



function User(){
  return (
    <div>
      <h1> Add New Project</h1>
      <NewProjectControl/>
      <h1> Your Projects</h1>
      <ProjectList/>


    </div>
  );
}


export default User;
