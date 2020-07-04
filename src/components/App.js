import React from "react";

import LoginPage from "./pages/LoginPage";
import NavBar from "./layout/Navbar";
import SimpleLineChart from "./widgets/SimpleLineChart";
import SimplePieChart from "./widgets/SimplePieChart";
import SimpleBarChart from "./widgets/SimpleBarChart";
import DropdownMenu from "./layout/DropdownMenu";
import Heatmap from "./widgets/Heatmap";
import Card from "./widgets/Box";
import InputBox from "./layout/InputBox";

import "../App.css";

const App = () => {
    return (
        <div className="ui-container">
        <LoginPage/>
        <div className="navbar"><NavBar/></div>
        <div className="card"><Card/></div>
        <div className="dropdown-lower"><DropdownMenu
        title="Benchmark"/></div>
        <div className="input-start-lower"><InputBox
        entry="Start"/></div>
        <div className="input-end-lower"><InputBox
        entry="End"/></div>
        <div className="times-lower"><DropdownMenu
        title="Set Times"/></div>
        <div className="linechart-lower"><SimpleLineChart/></div>
        <div className="dropdown-upper"><DropdownMenu
        title="Benchmark"/></div>
        <div className="input-start-upper"><InputBox
        entry="Start"/></div>
        <div className="input-end-upper"><InputBox
        entry="End"/></div>
        <div className="times-upper"><DropdownMenu
        title="Set Times"/></div>
        <div className="linechart-upper" style={{left:"750"}}><SimpleLineChart/></div>
        <div className="piechart"><SimplePieChart/></div>
        <div className="barchart"><SimpleBarChart/></div>
        <div className="heatmap"><Heatmap/></div>
        </div>
    );
};

export default App;
