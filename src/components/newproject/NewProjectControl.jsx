import React from 'react';
import TypeQuestions from './TypeQuestions';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';




function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class NewProjectControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      project: null,
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  
  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render(){
    const { classes } = this.props;
  
    /* let renderForm =null;
    if project = paint, renderForm = PaintForm */
    
    
    return (
      <div>
        <Typography gutterBottom>Add a New Project</Typography>
        <Button onClick={this.handleOpen}>Add</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
             Choose Project Type:
            </Typography>
            <TypeQuestions/>
          </div>
        </Modal>
        
        <hr/>
      </div>
    );
  }
}

NewProjectControl.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewProjectControl); 