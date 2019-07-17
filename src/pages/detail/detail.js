import React, { Component } from 'react';
import './detail.css';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Nav from '../../components/Nav/nav';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Nav />
                <h4>detail</h4>

            </div>
        )
    }
}