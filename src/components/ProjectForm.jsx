import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function ProjectForm(props) {
  let _title = null;
  let _medium = null;
  let _size = null;


  function handleNewFormSubmission(event) {
    event.preventDefault();
    props.onNewActorCreation({title: _title.value, medium: _medium.value, size: _size.value, id: v4()});
    _title.value = '';
    _medium.value = '';
    _size.value = '';
  }


  return(
    <div>
      <form onSubmit={handleNewFormSubmission}>
        <input type="text" placeholder="Title" ref={(input) => {_title = input;}}/>
        <input type="text" placeholder="Medium"ref={(input) => {_medium = input;}}/>
        <input type="text" placeholder="Size"ref={(input) => {_size = input;}}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );

  export default ProjectForm;
