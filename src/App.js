import React, { Component } from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Upnav from './components/Upnav'
import "./App.css";
// import Capture from '../image/Capture.jpg'

export class App extends Component {
  render() {
  return (
    <div>
      <Upnav />
      {/* <img src="../img/Capture.jpg" width="100" height="100"/> */}
      {/* <img src={process.env.PUBLIC_URL + '/Capture.jpg'} />  */}
    </div>
  );
}
}

export default App;
