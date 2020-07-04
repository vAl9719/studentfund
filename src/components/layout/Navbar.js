import React from "react";
import "../../App.css";
import {Layout} from "antd";
import Icon from '@ant-design/icons';
const { Header } = Layout;

const NavBar = (props) => {
   return (
    <Layout>
    <Header className="header">
      <div className="neu">NEU</div>
      <div className="svu">SVU</div>
      <Icon component={()=> (<img class="nelogo" src="https://brand.northeastern.edu/wp-content/uploads/NU_SealNUv_RGB_BB-e1566505821706-700x333.png" alt="logo"/>)}/>
    </Header>
    </Layout>
   );
};

export default NavBar;