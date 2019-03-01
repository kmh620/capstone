
import React from 'react';
import PaintList from './PaintList';
import SculptureList from './SculptureList';
import OtherList from './OtherList';


function ProjectTypeList(){
  return (
    <div>
      <h1>Project by type List</h1>
      <div>
        <h2>painting</h2>
        <PaintList/>
      </div>
      <div>
        <h2>sculpture</h2>
        <SculptureList/>
      </div>
      <div>
        <h2>Other</h2>
        <OtherList/>
      </div>
    
    </div>
  );
}

export default ProjectTypeList;