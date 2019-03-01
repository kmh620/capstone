import React from 'react';
import Sculpture from './Sculpture';

var sculptureList = [
  {
    title: 'Dogs',
    medium: 'Wood',
    notes: ['Got a splinter today :(']
  },
  {
    title: 'Untitled 1',
    medium: 'Found objects',
    notes: ['Potential buyer: Grandma', 'Add more dogs by tuesday!']
  },
  {
    title: 'Large Dog 12',
    medium: 'Iron',
    notes: ['Find welder!']
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