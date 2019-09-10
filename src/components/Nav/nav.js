import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Menu, Icon } from 'antd';
import './nav.css';
import { withRouter, Link } from "react-router-dom";
import logo1 from '../../material/logo1.png';
// import { history } from '../../Route';
import GlobalStore from '../../store/globalStore';



const navtit = [
    { id: '1', tit: 'Home', path: '/' },
    { id: '2', tit: 'Datepick', path: '/datepick' },
    { id: '3', tit: 'Detail', path: '/detail' }];
const { SubMenu } = Menu;
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            nankey:['1'],
        }
    }
    componentDidMount() {
        console.log('props: ', this.props);
        this.setState({nankey:GlobalStore.navKey})

        // Get the current location.
        this.location = this.props.history.location;
        // Listen for changes to the current location.
        this.unlisten = this.props.history.listen((location, action) => {
            // location is an object like window.location
            console.log(action, location.pathname, location.state);
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        // let selectedkey =this.props.history.location.state?this.props.history.location.state.key:['1'];
        let selectedkey = GlobalStore.navKey;
        return (
            <div>
                <div className='logo_wp'>
                    <Link to={`/`} ><img src={logo1} className="App-logo" alt="logo" /></Link>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={this.state.nankey}
                    style={{ lineHeight: '64px' }}
                >
                    {navtit.map(item => (
                        <Menu.Item key={item.id}>
                            <span>{item.tit}</span>
                            <Link to={`${item.path}`} />
                        </Menu.Item>
                    ))}
                    <SubMenu
                        key="sub"
                        title={<span><Icon type="setting" />Setting</span>}
                    >
                        <Menu.Item key="sub1">option1</Menu.Item>
                        <Menu.Item key="sub2">option2</Menu.Item>
                        <Menu.Item key="sub3">option3</Menu.Item>
                        <Menu.Item key="sub4">option4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
export default observer(withRouter(Nav))//将history传props中
