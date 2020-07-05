import React from "react";
import axios from "axios";
import { Form, Input, Button, Select } from "antd";
import { FormInstance } from "antd/lib/form";
import InputBox from "./InputBox";

const {Option} = Select;



class InputForm extends React.Component{
    handleClick(value){
        console.log("clicked");
        console.log(value.key)
    
    }

    onFinish = values => {
        console.log(values);
        console.log(values.benchmark);
        axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-histories",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":"b3cc80298bmshc51561cd78be00bp18a307jsn7343d212e7ad",
    "useQueryString":true
    },"params":{
    "region":"US",
    "lang":"en",
    "symbol":values.benchmark.value,
    "from":"1231866000",
    "to":"1547524844",
    "events":"div",
    "interval":values.interval.value,
    }
    })
    .then((response)=>{
      console.log(response);
      var data = response.data.chart.result[0].indicators.quote[0].close;
      console.log(data);
      //all the closing numbers after every interval to be graphed
      
    })
    .catch((error)=>{
      console.log(error)
    })
    }
    
    renderForm(){
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
            };
        const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
        };

    return(
        <Form 
        {...layout} 
         
        onFinish={this.onFinish}>

            <div className="dropdown-lower"><Form.Item name="benchmark">
            <Select
                labelInValue
                defaultValue={{ key: 'SPX' }}
                style={{ width: 120 }}
                
            >
                <Option value="SPX">SP 500</Option>
                <Option value="DJIA">Dow Jones</Option>
                <Option value="NDAQ">Nasdaq</Option>
                <Option value="RUT">Russell 2000</Option>
            </Select>
            </Form.Item></div>

            <Form.Item name="start" rules={[{required: true}]}>
            <div className="input-start-lower"><InputBox
        entry="Start"/></div>
            </Form.Item>

            <Form.Item name="end" rules={[{required: true}]}>
            <div className="input-end-lower"><InputBox
        entry="End"/></div>
            </Form.Item>

            <div className="times-lower"><Form.Item name="interval">
            <Select
                labelInValue
                defaultValue={{ key: '1mo' }}
                style={{ width: 120 }}
            >
                <Option value="1mo">1 Month</Option>
                <Option value="3mo">3 Months</Option>
                <Option value="1d">1 Day</Option>
            </Select>
        </Form.Item></div>
        <Form.Item>
            <Button className="form-button" htmlType="submit">Submit</Button>
        </Form.Item>
        </Form>
    );
    }
    render(){
       return(<div>{this.renderForm()}</div>); 
    }
}

export default InputForm;
