import React from "react"
import { Link } from "@reach/router"

export default ({ currentPage, lastPage }) => {
  return (
    <div className="pager">
      <Link to={`/${currentPage - 1}`}>Previous</Link>
      <span>
        {currentPage}/{lastPage}
      </span>
      <Link to={`/${currentPage + 1}`}>Next</Link>
    </div>
  )
}
