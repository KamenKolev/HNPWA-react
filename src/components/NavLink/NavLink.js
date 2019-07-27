import React from "react"
import { Link } from "@reach/router"

// this link will be active when itself or deeper routes
// are current
const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : null
}

export default props => <Link getProps={isPartiallyActive} {...props} />
