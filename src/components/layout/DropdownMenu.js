import React from "react";
import { Select } from 'antd';
import axios from "axios";


const {Option} = Select;
class DropdownMenu extends React.Component {

    handleChange = (value) => {
        console.log(value);
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
    "symbol":value.key,
    "from":"1231866000",
    "to":"1547524844",
    "events":"div",
    "interval":"1mo",
    }
    })
    .then((response)=>{
      console.log(response);
      console.log(response.data.chart.result[0].indicators.quote[0].close);

    })
    .catch((error)=>{
      console.log(error)
    })

        
    }
    
    render(){
    return(
    <Select
    labelInValue
    defaultValue={{ key: 'AMZN' }}
    style={{ width: 120 }}
    onChange={this.handleChange}
  >
    <Option value="AAPL">Apple</Option>
    <Option value="AMZN">Amazon</Option>
  </Select>
  );
    }
}

export default DropdownMenu;
