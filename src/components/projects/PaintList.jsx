import React from 'react';
import Painting from './Painting';


var paintingList = [
  {
    title: 'Untitled 1',
    medium: 'Acrylic on paper',
    notes: ['Add piece to Series A ??']
  },
  {
    title: 'Painting of dogs',
    medium: 'Oil on canvas',
    notes: ['Cute dogs, get more dogs!', 'Ran out of blue paint...']
  },
  {
    title: 'Another painting',
    medium: 'Watercolor',
    notes: ['Too wet, don\'t use so much water next time!', 'Add a dog to this piece?']
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
