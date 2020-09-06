import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import Ticker from "./components/Ticker";

function App() {
    return (
    <>
    <Navbar/>
    <div className="App">
        <LogInForm/>
      <Ticker />
    </div>
      
    </>

    );
    
}

export default App;
