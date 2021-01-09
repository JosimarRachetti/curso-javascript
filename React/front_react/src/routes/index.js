import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import page404 from '../pages/page404';

export default function Routes() {
  toast.success('Oie, sucesso!');
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={page404} />
    </Switch>
  );
}
