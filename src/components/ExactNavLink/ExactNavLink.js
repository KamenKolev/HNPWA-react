import React from "react"
import { Link } from "@reach/router"

// this is only active when the location pathname is exactly
// the same as the href.
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

export default props => <Link getProps={isActive} {...props} />
