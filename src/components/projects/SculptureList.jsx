import React from 'react';
import Sculpture from './Sculpture';

var sculptureList = [
  {
    title: '',
    medium: '',
    notes: ''
  },
  {
    title: '',
    medium: '',
    notes: ''
  },
  {
    title: '',
    medium: '',
    notes: ''
  }
];

function SculptureList(){
  return (
    <div>
      <hr/>
      {sculptureList.map((sculpture, index) =>
        <Sculpture title={sculpture.title}
          medium={sculpture.medium}
          notes={sculpture.notes}
          key={index}/>
      )}
    </div>
  );
}

export default SculptureList;