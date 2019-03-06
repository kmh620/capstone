import React from 'react';
import PropTypes from 'prop-types';

function PaintForm(props){
  let _title = null;
  let _medium = null;
  let _notes = null;
  let _dimensions = null;

  function handlePaintFormSubmission(event) {
    event.preventDefault();
    props.onNewPaintingCreation({title: _title.value, medium: _medium.value, notes: _notes.value, dimensions: _dimensions.value});
    _title.value = '';
    _medium.value = '';
    _notes.value = '';
    _dimensions.value = '';
  }

  return (
    <div>
      <h1> Painting!!!!</h1>
      <form onSubmit={handlePaintFormSubmission}>
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

PaintForm.propTypes = {
  onNewPaintingCreation: PropTypes.func
};

export default PaintForm;