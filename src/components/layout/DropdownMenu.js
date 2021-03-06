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
        console.log(values.start);
        var startDate = new Date(values.start);
        var endDate = new Date(values.end);
        var msf = Math.floor(startDate.getTime()/1000.0);
        var mst = Math.floor(endDate.getTime()/1000.0);
        var from = msf.toString();
        var to = mst.toString();
        console.log(from);
        console.log(to);

        axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-histories",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":"2c947cc96emsh0f810c26bf1557cp1e6876jsn90f9d7ffa881",
    "useQueryString":true
    },"params":{
    "region":"US",
    "lang":"en",
    "symbol":values.benchmark.value,
    "from": from, //start
    "to": to, //end
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
                
                style={{ width: 120 }}
                
            >
                <Option value="SPX">SP 500</Option>
                <Option value="DJI">Dow Jones</Option>
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
                
                style={{ width: 120 }}
            >
                <Option value="1mo">1 Month</Option>
                <Option value="3mo">3 Months</Option>
                <Option value="1d">1 Day</Option>
                <Option value="5d">5 Days</Option>
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
