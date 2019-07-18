import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/home/home';
import DatePick from './pages/datepick/datepick';
import Detail from './pages/detail/detail';
import './App.css';
import { Menu } from 'antd';
import DevTools from 'mobx-react-devtools'

const { SubMenu } = Menu;


export const Routes = () => (

  <Router>
    <div className='container'>
      {/* <DevTools /> */}
      <Route exact path="/" component={Home} />
      <Route path="/datepick" component={DatePick} />
      <Route path="/detail" component={Detail} />
    </div>
  </Router>
)

