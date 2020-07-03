import React from "react";

import LoginPage from "./pages/LoginPage";
import SimpleLineChart from "./widgets/SimpleLineChart";
import SimplePieChart from "./widgets/SimplePieChart";
import Heatmap from "./widgets/Heatmap";
import Card from "./widgets/Box";

const App = () => {
    return (
        <div className="ui-container">
        <LoginPage/>
        <Card/>
        <SimpleLineChart/>
        <SimpleLineChart/>
        <Heatmap/>
        <SimplePieChart/>
        </div>
    );
};

export default App;