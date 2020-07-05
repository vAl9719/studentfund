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
    "x-rapidapi-key":"b3cc80298bmshc51561cd78be00bp18a307jsn7343d212e7ad",
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
    defaultValue={{ key: 'SPX' }}
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
