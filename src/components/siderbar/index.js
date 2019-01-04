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
            title={<span><Icon type="lock" /><span>Lock</span></span>}
            >
            <Menu.Item key="1">
              <NavLink to="/admin/home">home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/admin/ui/buttons">buttons</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="android" /><span>Android</span></span>}
            >
            <Menu.Item key="5">
              <NavLink to="/admin/ui/notices">notices</NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/admin/ui/loadings">loadings</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="apple" /><span>Apple</span></span>}
            >
            <Menu.Item key="7">
              <NavLink to="/admin/ui/modals">modals</NavLink>
            </Menu.Item>
            <Menu.Item key="8">
              <NavLink to="/admin/ui/notices">notices</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={<span><Icon type="windows" /><span>Windows</span></span>}
            >
            <Menu.Item key="9">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
            <Menu.Item key="10">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
            <Menu.Item key="11">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
            <Menu.Item key="12">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={<span><Icon type="ie" /><span>IE</span></span>}>
            <Menu.Item key="13">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
            <Menu.Item key="14">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={<span><Icon type="chrome" /><span>Chrome</span></span>}
            >
            <Menu.Item key="15">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
            <Menu.Item key="16">
              <NavLink to="/admin/home">OPtion 1</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub7"
            title={<span><Icon type="github" /><span>Github</span></span>}></SubMenu>
          <SubMenu
            key="sub8"
            title={<span><Icon type="codepen" /><span>Codepen</span></span>}></SubMenu>
          <SubMenu
            key="sub9"
            title={<span><Icon type="slack-square" /><span>Slack</span></span>}></SubMenu>
          <SubMenu
            key="sub10"
            title={<span><Icon type="alipay" /><span>alipay</span></span>}></SubMenu>
          <SubMenu
            key="sub11"
            title={<span><Icon type="gitlab" /><span>gitlab</span></span>}></SubMenu>
          <SubMenu
            key="sub12"
            title={<span><Icon type="medium" /><span>medium</span></span>}></SubMenu>
        </Menu>
      </div>
    )
  }
}

export default Siderbar;
