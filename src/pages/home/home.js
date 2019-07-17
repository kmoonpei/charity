import React, { Component } from 'react';
import logo1 from '../../material/logo1.png'
import './home.css';
import Nav from '../../components/Nav/nav'

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <Nav />
                <header className="App-header">
                    <img src={logo1} className="App-logo" alt="logo" />
                </header>
                {/* <div className=""></div> */}
                <div className="center-part">
                    <h1 className="App-title">Welcome to React</h1>
                    <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                    <Parent />
                </div>
            </div>
        );
    }
}
function CustomTextInput(props) {
    return (
        <div style={{ width: 100, height: 100, backgroundColor: '#fff', marginLeft: 40 }} onClick={() => props.getFocu()}>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    render() {
        return (
            <CustomTextInput inputRef={this.inputElement} getFocu={this.getFocu.bind(this)} />
        );
    }
    getFocu() {
        this.inputElement.current.focus();
    }
}


