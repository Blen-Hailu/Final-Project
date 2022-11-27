import React from 'react';
import {
  BrowseRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";

export default function RouterSwitch () {
  <Switch>
    <Route path='/signup-cooks' > {/*Call component here*/}</Route>
    <Route path='/signup-customer' > {/*Call component here*/}</Route>
    <Route path='/catering' > {/*Call component here*/}</Route>

  </Switch>

}