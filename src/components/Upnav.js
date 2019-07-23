import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
import "../App.css";

export class Upnav extends Component {
  render() {
    return (
      <div>
          <div id="container">
             <div style={{ position: 'fixed', zIndex: 1, width: '100%', overflow: "hidden"}}>
                       <Menu align="right"
                          theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          style={{ lineHeight: '64px' }}
                        >
                          <Menu.Item key="4"  height="1px" style={{float:"left", padding:"6px", border:"none", margintop:"8px", marginright:"16px", fontsize:"17px"}}><input type="text" placeholder="Search..." /></Menu.Item>
                          <Menu.Item key="1">Housejoy for business</Menu.Item>
                          <Menu.Item key="2">Become a partner</Menu.Item>
                          <Menu.Item key="3">Address</Menu.Item>
                          <Menu.Item key="5">Login</Menu.Item>  
                        </Menu>
                        <img src="../image/Capture.jpg" alt=""  />
             </div>
          </div>
       </div>
    )
  }
}

export default Upnav
