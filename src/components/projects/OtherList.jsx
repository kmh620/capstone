import React from 'react';
import Other from './Other';

var otherList = [
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
      {otherList.map((other, index) =>
        <Other title={other.title}
          medium={other.medium}
          notes={other.notes}
          key={index}/>
      )}
    </div>
  );
}

export default PaintList;