
import React from 'react';
import PropTypes from 'prop-types';

import { v4 } from 'uuid';

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
    notes: ['Add piece to Series A ??'],
    id: v4()
  },
  {
    title: 'Painting of dogs',
    mainImage: dogPainting,
    medium: 'Oil on canvas',
    notes: ['Cute dogs, get more dogs!', 'Ran out of blue paint...'],
    id: v4()
  },
  {
    title: 'Another painting',
    mainImage: watercolor,
    medium: 'Watercolor',
    notes: ['Too wet, don\'t use so much water next time!', 'Add a dog to this piece?'],
    id: v4()
  },
  {
    title: 'Blanket',
    mainImage: blanket,
    medium: 'yarn',
    notes: ['this is gonna be soo warm', 'Ask Grandma for help'],
    id: v4()
  },
  {
    title: 'Photo 1',
    mainImage: photo,
    medium: 'Photography',
    notes: ['bleh...'],
    id: v4()
  }
];




class ProjectList extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };

  }


  render() {
    const  { classes } = this.props;

    return (
      <div>
        <div>
          <Grid container spacing={40}>
            {projectList.map((project, id) => (
              <Grid item key={project.id} id={project.id} sm={6} md={4} lg={3}>
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
                    <Button size="small" color="primary" id={project.id} onClick={() => console.log(project.id)}>View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}


ProjectList.propTypes = {
  classes: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string
};

export default withStyles(styles)(ProjectList);
