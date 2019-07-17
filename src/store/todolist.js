import { observable,computed } from "mobx";
import { finished } from "stream";

class TodoList {
    @observable todos=[];
}
class Todo {
    id=Math.random();
    @observable title;
    @observable finished;
    constructor(title){
        this.title = title;
    }

}
export default new TodoList().todos.push(new(Todo('我的第一件待办')))