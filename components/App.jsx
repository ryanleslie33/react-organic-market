import React from 'react';
import Header from './Header';
import Schedule from './Schedule/Schedule';
import FutureAvailable from './FutureAvailable/FutureAvailable';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
    <Header/>
      <Switch>
        <Route exact path='/' component={Schedule} />
        <Route exact path='/FutureAvailable' component={FutureAvailable} />
      </Switch>
    </div>
  );
}

export default App;
