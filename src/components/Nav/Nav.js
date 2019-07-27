import React from "react"
import NavLink from "../NavLink/NavLink"
import ExactNavLink from "../ExactNavLink/ExactNavLink"

export default props => (
  <nav>
    <ul>
      <li>
        <ExactNavLink to="/">Top</ExactNavLink>
      </li>
      <li>
        <NavLink to="/new">New</NavLink>
      </li>
      <li>
        <NavLink to="/show">Show</NavLink>
      </li>
      <li>
        <NavLink to="/ask">Ask</NavLink>
      </li>
      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>
    </ul>
  </nav>
)
