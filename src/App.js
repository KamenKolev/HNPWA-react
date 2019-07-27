import React, { lazy, Suspense } from "react"
import { Router, Link } from "@reach/router"
import logo from "./logo.svg"
import "./App.css"
const Top = lazy(() => import("./Views/Top/Top"))
const New = lazy(() => import("./Views/New/New"))
const Show = lazy(() => import("./Views/Show/Show"))
const Ask = lazy(() => import("./Views/Ask/Ask"))
const Jobs = lazy(() => import("./Views/Jobs/Jobs"))

function App() {
  return (
    <div className="App">
      {/* shell */}
      <nav>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/show">show</Link>
          </li>
          <li>
            <Link to="/ask">Ask</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Top path="/*" />
          <New path="/new" />
          <Show path="/show" />
          <Ask path="/ask" />
          <Jobs path="/jobs" />
          {/* <Top default /> */}
        </Router>
      </Suspense>
    </div>
  )
}

export default App
