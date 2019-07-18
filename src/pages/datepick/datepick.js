import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './datepick.css';
import { DatePicker, Button } from 'antd';
import 'antd/dist/antd.css';
import Nav from '../../components/Nav/nav';
import TodoList from './todolist/todolist';
import Select from './select/select';

export default class DatePick extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goDetail = () => {

    }
    render() {
        return (
            <div className='conta'>
                <Nav />
                <DatePicker className='data_picker' />
                <Button onClick={this.goDetail} type="primary" className='btn'>detail page</Button>
                <TodoList />
                <Select values={["State.", "Should.", "Be.", "Synchronous."]}
                    onSelect={value => console.log(value)} />
            </div>

        )
    }
}