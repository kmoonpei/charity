import { observable, computed ,action} from "mobx";
// import Todo from './todo';
class TodoLists {
    @observable todos = [];
    @computed get left() {
        return this.todos.filter(item => !item.finished).length;
    }
    @action.bound createTodo(title) {
        this.todos.unshift(new Todo(title))
      }
}
class Todo {
    id = Math.random();
    @observable title;
    @observable finished = false;
    constructor(title) {
        this.title = title;
    }
    @action.bound toggle() {
        this.finished = !this.finished;
    }
}

const lists = new TodoLists();
lists.todos.push(new Todo('我的第一件待办'));
lists.todos.push(new Todo('我的第二件待办'));

// let lists = new TodoLists();
// lists.todos.push('hhh')
export default lists;