import React, { lazy, Suspense } from "react"
import { Router } from "@reach/router"
import "./App.css"
import Nav from "./components/Nav/Nav"
import Page from "./components/Page/Page"

function App() {
  return (
    <div className="App">
      <Nav />

      <Router>
        <Page apiPath="news" lastPage="10" path="/top*" />
        <Page apiPath="newest" lastPage="12" path="/new/*" />
        <Page apiPath="ask" lastPage="2" path="/ask/*" />
        <Page apiPath="show" lastPage="2" path="/show/*" />
        <Page apiPath="jobs" lastPage="1" path="/jobs/*" />
      </Router>
    </div>
  )
}

export default App
