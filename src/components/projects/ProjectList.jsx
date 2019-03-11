
import React from 'react';
import PropTypes from 'prop-types';
import Transition from './Transition';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

import unfinished from '../../assets/images/project-img/unfinished-portrait-becky-kim.jpg';
import dogPainting from '../../assets/images/project-img/dogs-pat-saunders-white.jpg';
import watercolor from '../../assets/images/project-img/watercolor.jpeg';
import blanket from '../../assets/images/project-img/blanket.jpeg';
import photo from '../../assets/images/project-img/photo.jpeg';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});


var projectList = [
  {
    title: 'Untitled 1',
    mainImage: unfinished,
    medium: 'Acrylic on paper',
    notes: ['Add piece to Series A ??']
  },
  {
    title: 'Painting of dogs',
    mainImage: dogPainting,
    medium: 'Oil on canvas',
    notes: ['Cute dogs, get more dogs!', 'Ran out of blue paint...']
  },
  {
    title: 'Another painting',
    mainImage: watercolor,
    medium: 'Watercolor',
    notes: ['Too wet, don\'t use so much water next time!', 'Add a dog to this piece?']
  },
  {
    title: 'Blanket',
    mainImage: blanket,
    medium: 'yarn',
    notes: ['this is gonna be soo warm', 'Ask Grandma for help']
  },
  {
    title: 'Photo 1',
    mainImage: photo,
    medium: 'Photography',
    notes: ['bleh...']
  }
];














class ProjectList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickOpen =
    this.handleClickOpen.bind(this);
    this.handleClose =
    this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }


  render() {
    const  { classes } = this.props;
    let show = null;

    if(this.state.open === true){
      show = <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                title
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="medium" secondary="List of products" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Notes" secondary="list of notes" />
            </ListItem>
          </List>
        </Dialog>
      </div>;
    } else {
      show = <div>
        <Grid container spacing={40}>
          {projectList.map(project => (
            <Grid item key={project} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  height="150"
                  image={project.mainImage}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography>
                    {project.medium}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={this.handleClickOpen}>View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>;
    }

    return (
      <div>
        {show}

      </div>
    );
  }
}



ProjectList.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ProjectList);
