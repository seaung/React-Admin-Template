import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import './index.less';

const SubMenu = Menu.SubMenu;


class Siderbar extends Component {
  render() {
    return (
      <div>
        <div className='logo'>
          <img src='' alt='' />
          <h1>React Admin system</h1>
        </div>
        <Menu theme='dark'>
          <SubMenu
            key='sub1'
            title={<span><Icon type="mail" /><span>Navigation One</span></span>}
            >
            <Menu.Item key="1"><NavLink to="/admin/home">OPtion 1</NavLink></Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}
            >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="setting" /><span>Navigation Three</span></span>}
            >
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span><Icon type="setting" /><span>Navigation Three</span></span>}
            >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="13">Option 7</Menu.Item>
            <Menu.Item key="14">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={<span><Icon type="setting" /><span>Navigation Three</span></span>}
            >
            <Menu.Item key="15">Option 7</Menu.Item>
            <Menu.Item key="16">Option 8</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Siderbar;
