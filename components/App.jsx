import React from 'react';
import Header from './Header';
import Schedule from './Schedule/Schedule';

const schedule = {
  marginLeft: '250px'
};

function App(){
  return (
    <div>
      <Header/>
      <div style={schedule}>
        <Schedule />
      </div>

    </div>
  );
}

export default App;
