import { action, observable } from 'mobx';

class Global {
    @observable navKey = ['1'];
    @action.bound changeKey(key){
        this.navKey=key;
    }
}

export default new Global();