import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import lents from '../../src/assets/images/lents.png';

const styles = {
  card: {
    maxWidth: '900',
  },
  media: {
    height: '600',
  },
};

function Day(props) {
  // const { classes } = "string";
  return (
    <Card>
       <img src={lents}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <h3>{props.location}</h3>
        </Typography>
        <Typography component="p">
          <div>
            <h5>{props.day}</h5>
            <h5>Hours: {props.hours}</h5>
            <h5>Booth: {props.booth}</h5>
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

Day.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
}

export default withStyles(styles)(Day);
