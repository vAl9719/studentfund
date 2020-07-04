import React from "react";
import {Input} from "antd";

const InputBox = (props) => {
    return(
    <div className="entry"><Input placeholder={props.entry}/></div>
    );
}
export default InputBox;