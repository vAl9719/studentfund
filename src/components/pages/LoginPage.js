import React from 'react';
//import Modal from "../Modal";
import { Modal, Form, Input, Button } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import "../../App.css";


class LoginPage extends React.Component {
    constructor(){
        super();
        this.state = {
            visible: true,
            confirmLoading: false
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }
    renderForm(){
        const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
        };
        const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <React.Fragment>
                <Form
                {...layout}
                name="basic"
                >
                

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                        />
                </Form.Item>
                </Form>
            </React.Fragment>
        );
    }
    
    handleCloseModal(){
        setTimeout(()=> {
            this.setState({
                visible: false,
                confirmLoading: false});
        }, 2000);
        
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.setState({
            confirmLoading: true
        })
        this.handleCloseModal();
    }

    render(){
        const { visible, confirmLoading} = this.state;
        return (
      <div>
        <Modal
          title="Log In"
          visible={visible}
          onOk={this.handleOnSubmit}
          confirmLoading={confirmLoading}
          closable={false}
          footer={[
              <Button type="primary" htmlType="submit" onClick={this.handleOnSubmit}>
              Submit
            </Button>
          ]}
        >
            {this.renderForm()}
        </Modal>
      </div>
    );
    }
}

/*<Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>*/

export default LoginPage;