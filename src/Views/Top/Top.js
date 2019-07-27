import React, { useState, useEffect } from "react"
import axios from "axios"
import Item from "../../components/Item/Item"
import { Link } from "@reach/router"

export default props => {
  let [topPosts, setTopPosts] = useState([])
  let currentPage = +props["*"] || 1

  useEffect(() => {
    async function fetchPosts() {
      let { data } = await axios.get(`/news/${currentPage}.json`)
      setTopPosts(
        data.map((post, index) => ({
          ...post,
          index: 1 + index + (currentPage - 1) * 30,
        })),
      )
    }
    fetchPosts()
  }, [currentPage])

  return (
    <>
      {/* <p>Current page {currentPage}</p> */}
      <section className="items">
        {topPosts.map(post => (
          <Item key={post.id} {...post} />
        ))}
      </section>
      <Link className="nextPageBtn" to={`/${+currentPage + 1}`}>
        More
      </Link>
    </>
  )
}
