import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio.js";
import Edit from "./components/Edit/Edit.js";
import axios from "axios";

function App() {
    const history = useHistory();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [state, setState] = useState({
        email: "",
        password: "",
        isLogginIn: false,
    });

    // handle signin/signup form inputs
    const handleInput = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    // handle new user signup
    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "https://coinstance-backend.herokuapp.com/users/signup",
                {
                    email: state.email,
                    password: state.password,
                }
            );
            console.log(response);
            localStorage.token = response.data.token;
            setIsLoggedIn(true);
            history.push("/portfolio");
        } catch (err) {
            console.log(err);
        }
    };

    // handle login event
    const handleLogIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "https://coinstance-backend.herokuapp.com/users/login",
                {
                    email: state.email,
                    password: state.password,
                }
            );
            localStorage.token = response.data.token;
            setIsLoggedIn(true);
            history.push("/portfolio");
        } catch (error) {
            console.log(error);
        }
    };

    // check for auth token
    useEffect(() => {
        if (localStorage.token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    // handle user logout
    const handleLogOut = () => {
        setState({
            email: "",
            password: "",
            isLoggedIn: false,
        });
        localStorage.clear();
        history.push("/");
    };
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn} logOut={handleLogOut} />
            <div className="App">
                <Switch>
                    <Route
                        path="/signup"
                        render={(props) => {
                            return (
                                <SignUpForm
                                    loggedIn={isLoggedIn}
                                    handleInput={handleInput}
                                    handleSignUp={handleSignUp}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/logout"
                        render={(props) => {
                            return (
                                <LogOut
                                    isLoggedIn={isLoggedIn}
                                    handleLogOut={handleLogOut}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/login"
                        render={(props) => {
                            return (
                                <LogInForm
                                    isLoggedIn={isLoggedIn}
                                    handleInput={handleInput}
                                    handleLogIn={handleLogIn}
                                />
                            );
                        }}
                    />
                    <Route
                        path="/portfolio"
                        render={(props) => {
                            return <Portfolio />;
                        }}
                    />
                    <Route
                        path="/:id"
                        render={(props) => {
                            return <Edit {...props} />;
                        }}
                    />
                    <Route
                        path="/"
                        render={(props) => {
                            return <Home />;
                        }}
                    />
                </Switch>
            </div>
        </>
    );
}

export default App;
