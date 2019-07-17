import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('TodoList')
@observer
 class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render(){
        let list = this.props.TodoList;
        // let list = [];
        return(
            <div>
                <ul>
                    {list.map(item=>{
                        return <li>{item.title}</li>
                    })}
                    
                </ul>
            </div>
        )
    }
}
export default TodoList