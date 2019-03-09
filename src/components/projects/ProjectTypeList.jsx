
import React from 'react';

import PropTypes from 'prop-types';


import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import unfinished from '../../assets/images/project-img/unfinished-portrait-becky-kim.jpg';
import dogPainting from '../../assets/images/project-img/dogs-pat-saunders-white.jpg';
import watercolor from '../../assets/images/project-img/watercolor.jpeg';
import blanket from '../../assets/images/project-img/blanket.jpeg';
import photo from '../../assets/images/project-img/photo.jpeg';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
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
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
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
    notes: []
  }
];


function ProjectTypeList(props){
  const { classes } = props;

  return (
    <div>
      <div>
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
                  <Button size="small" color="primary">
                         View
                  </Button>
                  <Button size="small" color="primary">
                         Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>


    </div>
  );
}

ProjectTypeList.propTypes = {
  classes: PropTypes.object
};
export default withStyles(styles)(ProjectTypeList);
