
import React from 'react';

import ProjectTypeList from './projects/ProjectTypeList';
import NewProjectControl from './newproject/NewProjectControl';
import SeriesList from './SeriesList';


function User(){
  return (
    <div>
      <NewProjectControl/>
      <ProjectTypeList/>
      <SeriesList/>
    </div>
  );
}

export default User;
