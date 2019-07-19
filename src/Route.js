import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Home from './pages/home/home';
import DatePick from './pages/datepick/datepick';
import Detail from './pages/detail/detail';
import './App.css';
import { Menu } from 'antd';
import { createBrowserHistory, createHashHistory } from 'history';
import Nav from './components/Nav/nav';


const { SubMenu } = Menu;
export const history = createBrowserHistory();

export const Routes = () => (

  <Router history={history} >
    <div className='container'>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/datepick" component={DatePick} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </div>
  </Router>
)
