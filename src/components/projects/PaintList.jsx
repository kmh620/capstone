import React from 'react';
import Painting from './Painting';

var paintingList = [
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

function PaintList(){
  return (
    <div>
      <hr/>
      {paintingList.map((painting, index) =>
        <Painting title={painting.title}
          medium={painting.medium}
          notes={painting.notes}
          key={index}/>
      )}
    </div>
  );
}

export default PaintList;