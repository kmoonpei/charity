import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TodoLists from '../../../store/todolist';
import DevTools from 'mobx-react-devtools'
import {compose} from 'recompose';

// @inject('TodoLists')
// @observer
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTile: "",
        }
    }
    
    handleSubmit = (e) => {
        // 表单提交，阻止整个页面被提交
        e.preventDefault();
        // let { store } = this.props;
        let { inputTile } = this.state;
        TodoLists.createTodo(inputTile);

        // 创建完新的条目之后，要清空输入框
        this.setState({
            inputTile: ""
        })
    };

    handleChange = (e) => {
        var inputTile = e.target.value;
        this.setState({
            inputTile
        })
    }
    handleClick = (todo) => {
        todo.toggle();
    }
    
    render() {
        let list = TodoLists.todos;
        let { inputTile } = this.state;
        // let list = this.props.TodoLists.todos;
        // console.log(TodoLists)
        // let list = [];
        return (
            <div>
                {/* <DevTools /> */}
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                        onChange={this.handleChange}
                        value={inputTile}
                        placeholder="你想要到哪里去？"
                        className="input"
                    />
                </form>
                <ul>
                    {list.map(todo => {
                        return <li key={todo.id}>
                            <input
                                type="checkbox"
                                checked={todo.finished}
                                onChange={()=>{this.handleClick( todo)}}
                            />
                            <span>{todo.title}</span>
                        </li>
                    })}
                </ul>
                <span>{TodoLists.left}</span>
            </div >
        )
    }
}
export default observer(TodoList);//不使用装饰器的方法
// export default TodoList;

// export default compose(
//     observer,
//     inject('TodoLists')
//   )(TodoList)