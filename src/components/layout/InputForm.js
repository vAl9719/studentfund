import React from "react";
import { Select } from 'antd';
import axios from "axios";


const {Option} = Select;
class DropdownMenu extends React.Component {

    handleChange = (value) => {
        console.log(value.key);
        axios({
    "method":"GET",
    "url":"https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"apidojo-yahoo-finance-v1.p.rapidapi.com",
    "x-rapidapi-key":"2c947cc96emsh0f810c26bf1557cp1e6876jsn90f9d7ffa881",
    "useQueryString":true
    },"params":{
    "region":"US",
    "symbol":value.key
    }
    })
    .then((response)=>{
      console.log(response)
      
    })
    .catch((error)=>{
      console.log(error)
    })  
    }
    
    render(){
    return(
    <Select
    labelInValue
    style={{ width: 120 }}
    onChange={this.handleChange}
  >
    <Option value="SPX">SP 500</Option>
    <Option value="DJIA">Dow Jones</Option>
    <Option value="NDAQ">Nasdaq</Option>
    <Option value="RUT">Russell 2000</Option>
    
  </Select>
  
  );
    }
}

export default DropdownMenu;
