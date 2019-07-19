import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import './datepick.css';
import { DatePicker, Button } from 'antd';
import TodoList from './todolist/todolist';
import Select from './select/select';
import GlobalStore from '../../store/globalStore';
import { observer } from 'mobx-react';
import {history} from '../../Route';


class DatePick extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goDetail = () => {
        history.push('/detail', { key: ['3'] });
        GlobalStore.changeKey(['3'])
    }
    render() {
        return (
            <div className='conta'>
                <DatePicker className='data_picker' />
                <Button onClick={this.goDetail} type="primary" className='btn'>detail page</Button>
                <TodoList />
                <Select values={["State.", "Should.", "Be.", "Synchronous."]}
                    onSelect={value => console.log(value)} />
            </div>
        )
    }
}
export default observer(DatePick);