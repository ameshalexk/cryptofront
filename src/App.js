import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio.js";
import axios from "axios";
// import "./App.css";

function App() {
    const history = useHistory();
    // localStorage.setItem("token", "xyz");
    const coinAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ceos%2Cripple%2Clitecoin&vs_currencies=usd&include_24hr_change=true";
    const [coinData, setCoinData] = useState({});
    const [purchases, setPurchases] = useState([]);
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
                "http://localhost:3001/users/signup",
                {
                    email: state.email,
                    password: state.password,
                }
            );
            console.log(response);
            localStorage.token = response.data.token;
            setIsLoggedIn(true);
            history.push("/");
        } catch (err) {
            console.log(err);
        }
    };

    // handle login event
    const handleLogIn = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3001/users/login",
                {
                    email: state.email,
                    password: state.password,
                }
            );
            localStorage.token = response.data.token;
            setIsLoggedIn(true);
            history.push("/");
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
    };

    // populate coinData state
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(coinAPI);
                const data = await response.data;
                setCoinData({ ...data });
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    // populate purchase data
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3001/api/purchases"
                );
                const data = await response.data;
                setPurchases(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

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
                        path="/"
                        render={() => {
                            return isLoggedIn ? (
                                <Portfolio
                                    coinData={coinData}
                                    purchases={purchases}
                                />
                            ) : (
                                <Home coinData={coinData} />
                            );
                        }}
                    />
                </Switch>
            </div>
        </>
    );
}

export default App;
