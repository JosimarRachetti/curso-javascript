import React from 'react';
import { Switch } from 'react-router-dom';
// import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import homeWater from '../pages/homeWater';
import homeEnergy from '../pages/homeEnergy';
import homePage from '../pages/homePage';
import page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={homePage} />
      <MyRoute exact path="/water" component={homeWater} />
      <MyRoute exact path="/energy" component={homeEnergy} />
      <MyRoute path="*" component={page404} />
    </Switch>
  );
}
