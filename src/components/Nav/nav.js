import React, { Component } from 'react';
import './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
            <ul className="nav_ul">
                <li className="nav_li">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav_li">
                    <Link to="/datepick">About</Link>
                </li>
                <li className="nav_li">
                    <Link to="/detail">Detail</Link>
                </li>
            </ul>
            // <menu>
            // <div>
            //   <Menu.Item>菜单项</Menu.Item>
            //   <SubMenu title="子菜单">
            //     <Menu.Item>子菜单项</Menu.Item>
            //   </SubMenu>
            // </div>
            // </menu>
        )
    }
}