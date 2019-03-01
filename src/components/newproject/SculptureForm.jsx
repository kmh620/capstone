import React from 'react';

function SculptureForm(){
  let _title = null;
  let _medium = null;
  let _notes = null;
  let _dimensions = null;

  function handleSculptureFormSubmission(event) {
    event.preventDefault();
    _title.value = ''
    _medium.value = ''
    _notes.value = ''
    _dimensions.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSculptureFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='medium'
          placeholder='Location'
          ref={(input) => {_medium = input;}}/>
          <input
            type='text'
            id='dimensions'
            placeholder='HxLxW'
            ref={(input) => {_dimensions = input;}}/>
        <textarea
          id='notes'
          placeholder='Notes'
          ref={(textarea) => {_notes = textarea;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default SculptureForm;