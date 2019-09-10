import React, { Component, createRef } from 'react';
// import { _ } from 'lodash';

const _ = require('lodash');
export default class login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Parent title={'姓名'} />
                <Parent title={'电话'} />
                <Parent title={'昵称'} />
            </>
        )
    }
}

class CustomTextInput extends Component {
    constructor(props) {
        super(props);
        // this.log = _.debounce(e => { console.log(e.target.value) }, 1000)
        this.log = debounce(e=> {
            console.log(e.target.value)
        })

    }

    render() {
        return (
            <div style={{ width: '200px' }} onClick={() => this.props.getFocu()}>
                <span>{this.props.title}：</span>
                <input ref={this.props.inputRef} onChange={e => { e.persist(); this.log() }} />
            </div >
        );
    }

}

const debounce = (fn, interval = 3000) => {
    let timeout = null;// 创建一个标记用来存放定时器的返回值
    return () => {
        clearTimeout(timeout);// 每当用户输入的时候把前一个 setTimeout clear 掉
        timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            fn.apply(this, arguments);
        }, interval);
    };
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }


    render() {
        return (
            <CustomTextInput title={this.props.title} inputRef={this.inputElement} getFocu={this.getFocu.bind(this)} />
        );
    }
    getFocu() {
        this.inputElement.current.focus();
    }
}

