import React from "react";
import LoginPage from "./pages/LoginPage";
import NavBar from "./layout/Navbar";
import SimpleLineChart from "./widgets/SimpleLineChart";
import SimplePieChart from "./widgets/SimplePieChart";
import SimpleBarChart from "./widgets/SimpleBarChart";
import DropdownMenu from "./layout/DropdownMenu";
import Heatmap from "./widgets/Heatmap";
import Card from "./widgets/Box";
import InputForm from "./layout/InputForm";

import "../App.css";

class App extends React.Component {
    
    render(){
        return (
        <div className="ui-container">
        <LoginPage/>
        <div className="navbar"><NavBar/></div>
        <div className="card"><Card/></div>
        <div><InputForm/></div>
        <div className="linechart-lower"><SimpleLineChart /></div>
        <div className="dropdown-upper"><DropdownMenu/></div>
        <div className="linechart-upper" style={{left:"750"}}><SimpleLineChart/></div>
        <div className="piechart"><SimplePieChart/></div>
        <div className="barchart"><SimpleBarChart/></div>
        <div className="heatmap"><Heatmap/></div>
        </div>
    );}
};

export default App;
