import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Edit from "./components/Edit/Edit.js";

function App() {

    return (
        <>
            <Navbar />
            <div className="App">
                <LogInForm />
                <Home />
                <Portfolio />
                
                <Edit/>

                
            </div>
        </>
    );
}

export default App;
