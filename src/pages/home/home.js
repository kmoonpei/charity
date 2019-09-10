import React, { Component } from 'react';
import logo1 from '../../material/logo1.png'
import './home.css';
import Login from './login/login';

const HocLogin = logProps(Login);
export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="center-part">
                    <h1 className="App-title">Welcome to React</h1>
                    <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
                </div>
                <div>
                    {/* <Login /> */}
                    <HocLogin someThing={'nnnn'}/>
                </div>
            </div>
        );
    }
}



function logProps(WrappedComponent) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
            console.log('Current props: ', this.props);
            console.log('Next props: ', nextProps);
        }
        componentDidMount(){
            console.log('HOC props:',this.props)
        }
        render() {
            // 将 input 组件包装在容器中，而不对其进行修改。Good!
            return <WrappedComponent {...this.props} />;
        }
    }
}