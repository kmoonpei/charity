import { action, observable } from 'mobx';

class Global {
    @observable navKey = ['2'];
    @action.bound changeKey(key){
        this.navKey=key;
    }
}

export default new Global();