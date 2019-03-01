import React from 'react';
import Other from './Other';

var otherList = [
  {
    title: 'Blanket',
    medium: 'yarn',
    notes: ['this is gonna be soo warm', 'Ask Grandma for help']
  },
  {
    title: 'Photo 1',
    medium: 'Photography',
    notes: []
  }
];

function OtherList(){
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

export default OtherList;