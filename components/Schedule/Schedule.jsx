import React from 'react';
import Day from './Day';
import {marketSchedule} from '../../src/assets/schedule';


const card ={
  textAlign: 'center',
};

function Schedule(){
  return (
    <div style={card} >

      {marketSchedule.map((day, index) =>
        <Day
          img={day.img}
          location={day.location}
          day={day.day}
          hours={day.hours}
          booth={day.booth}
          key={index}/>
      )}
    </div>
  );
}

export default Schedule;
