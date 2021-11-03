
import React from 'react'; 
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  
import { AppStore } from "./redux/store";
import Routes from './Routes'; 
import 'antd/dist/antd.css';
import './index.css'; 
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={AppStore}>  
    <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal"  >
          Previsão do Tempo      
        </Menu>
    </Header>

    <Routes /> 
  </Provider>,
  rootElement
); 
 