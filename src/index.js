import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import axios from "axios"

// axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0/"
axios.defaults.baseURL = "https://api.hnpwa.com/v0/"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
