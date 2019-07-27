import React, { useState, useEffect } from "react"
import axios from "axios"
import Item from "../../components/Item/Item"

export default props => {
  let [topPosts, setTopPosts] = useState([])
  let [currentPage, setCurrentPage] = useState(1)
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
      <section className="items">
        {topPosts.map(post => (
          <Item {...post} />
        ))}
      </section>
      <button onClick={() => setCurrentPage(currentPage + 1)}>More</button>
    </>
  )
}
