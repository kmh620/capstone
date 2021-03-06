import React from 'react';

function OtherForm(){
  let _title = null;
  let _medium = null;
  let _notes = null;
  let _dimensions = null;

  function handleOtherFormSubmission(event) {
    event.preventDefault();
    _title.value = '';
    _medium.value = '';
    _notes.value = '';
    _dimensions.value = '';
  }

  return (
    <div>
      <h1>Other Project</h1>
      <form onSubmit={handleOtherFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='medium'
          placeholder='Medium'
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

export default OtherForm;