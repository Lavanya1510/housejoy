import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import "../App.css";
import { Layout, Menu, Icon,Col, Input,Dropdown,Row,Card } from 'antd';
const { Header, Content, Footer } = Layout;
const menu0 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu1 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu2 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu3 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu4 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu5 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu6 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);
const menu7 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Painting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Construction
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Renovation & Refurbishment
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Interior Design
      </a>
    </Menu.Item>
  </Menu>
);

// import location from '../logo/location.png'

export class Upnav extends Component {
  
    state = {
      hover: false
    }
    hoverOn=()=>{
     const hover=true;
      this.setState({ hover: true });
    }
    hoverOff=()=>{ 
      const hover=false;
      this.setState({ hover: false });    
    }

  
  render() {

    return (
      <div>
          <div id="container">
          <Layout>
                 <Header class="heading" >
               
                       <Menu align="right"
                       theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          style={{ lineHeight: '64px' }}
                          
                        >
                         <Menu.Item key="0" style={{float:"left"}}>
                             <span class="icon"><Icon type="home" /></span>
                             <span class="text">Housejoy</span>
                          </Menu.Item>
                          <Menu.Item style={{float:"left"}} class="aaa">
                            
                           <br class="search"></br>  <span class="sear"><Icon type="search" />
                           <Input placeholder="Search" /></span>
                          </Menu.Item>
                          <Menu.Item key="1">
                             <span class="icon"><Icon type="home" /></span>
                             <span class="text">Housejoy for business</span>
                           </Menu.Item>
                          <Menu.Item key="2">
                            <span class="icon"><Icon type="user" /></span>
                            <span class="text">Become a partner</span>
                          </Menu.Item>
                          <Menu.Item key="3">
                          <span class="icon"><Icon type="environment" /></span>
                          <span class="text"> Address</span></Menu.Item>
                          <Menu.Item key="5">Login</Menu.Item>
                          </Menu>
                         
                          
                          <Header class="dropdown" >
                         
                          <Menu align="left"
                       theme="dark"
                          mode="horizontal"
                          defaultSelectedKeys={['2']}
                          style={{ lineHeight: '64px' }}
                          
                        >
                         <Menu.Item>
                           <Dropdown overlay={menu0} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1"> RECENT LAUNCHES </span>
                               <span class="icon1"><Icon type="down" /><Icon type="up" /></span>
                               </a>
                           </Dropdown></Menu.Item>
                          
                           
                           <Menu.Item> <Dropdown overlay={menu1} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1"> SALOON AT HOME</span>
                               {/* <span class="icon1">  <span class="down"><Icon type="down" /></span><span class="up"><Icon type="up" /></span></span> */}
                             <span onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>{ this.state.hover ? <Icon type="down" /> : <Icon type="up" />}</span>
                               </a>
                           </Dropdown></Menu.Item>
                          
                           <Menu.Item> <Dropdown overlay={menu2} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1">  HOME CLEANING </span>
                               <span class="icon1">  <Icon type="down" /> <Icon type="up" /></span>
                               </a>
                           </Dropdown></Menu.Item>
                           <Menu.Item> <Dropdown overlay={menu3} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1"> PEST CONTROL </span>
                               <span class="icon1">  <Icon type="down" /> <Icon type="up" /></span>
                               </a>
                           </Dropdown></Menu.Item>
                           <Menu.Item> <Dropdown overlay={menu4} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1">  AC SERVICES </span>
                               <span class="icon1">  <Icon type="down" /> <Icon type="up" /></span>
                               </a>
                           </Dropdown></Menu.Item>
                           <Menu.Item> <Dropdown overlay={menu5} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1">  RENOVATION </span>
                               <span class="icon1">  <Icon type="down" /><Icon type="up" /> </span>
                               </a>
                           </Dropdown></Menu.Item>
                           <Menu.Item> <Dropdown overlay={menu6} style={{width: '20%'}}>
                               <a style={{width: '20%'}} className="ant-dropdown-link" href="#">
                               <span class="text1">  CONSTRUCTION </span>
                               <span class="icon1">  <Icon type="down" /><Icon type="up" /> </span>
                               </a>
                           </Dropdown></Menu.Item>
                           
                            </Menu>
                        </Header>
                     
                        
                        
                        </Header>
                        
                        <Content>
                       
                        <img src="../image/Capture.jpg" alt=""  />
                          
                        </Content>
                      
                        </Layout> 
             
          </div>
       </div>
    )
  }
}

export default Upnav
