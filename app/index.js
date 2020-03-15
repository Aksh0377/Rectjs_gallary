import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./Register";
import Dashboard from "./Dashboard";
import Routes from "./Routes";


ReactDOM.render(
         <Routes/>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
