import React from "react"
import { Link } from "@reach/router"

export default props => (
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
)
