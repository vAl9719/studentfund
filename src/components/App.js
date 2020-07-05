import React from "react";
import LoginPage from "./pages/LoginPage";
import ContentPage from "./pages/ContentPage";

class App extends React.Component {
    
    render(){
        return (
        <div className="ui-container">
        <LoginPage/>
        <ContentPage/>
        </div>
    );}
};

export default App;
