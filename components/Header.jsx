import React from 'react';
import { Link } from 'react-router-dom';
// import CardHeader from '@material-ui/core/CardHeader';

function Header(){
  return (
    <div>
      <h1>Averys Farm</h1>
      <Link to="/FutureAvailable">Seasonal Availability</Link>
    </div>
  );
}

export default Header;
