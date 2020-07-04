import React from "react";
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class DropdownMenu extends React.Component {
    renderMenu() {
        return(
            <Menu>
                <Menu.Item key="0">
                1st menu item
                </Menu.Item>
                <Menu.Item key="1">
                2nd menu item
                </Menu.Item>
                <Menu.Item key="2">
                3rd menu item
                </Menu.Item>
            </Menu>
        );
    }
    
    render(){
    return(
    <Dropdown overlay={this.renderMenu()} trigger={["click"]}>
      <Button>
        <span>
        <div className="title">{this.props.title} <DownOutlined /></div></span>
      </Button>
    </Dropdown>
        );
    }
}

export default DropdownMenu;
