import React from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const card = {
  marginTop: '20px',
  width: '550px'
};

function Day(props) {
  return (

    <Card style={card}>
      <img src={props.img} style={{width: '400px'}}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        {props.location}
        </Typography>
        <Typography component="div">
          <h5>{props.day}</h5>
          <h5>Hours: {props.hours}</h5>
          <h5>Booth: {props.booth}</h5>
        </Typography>
      </CardContent>
    </Card>
  );
}

Day.propTypes = {
  img: PropTypes.string,
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Day;
