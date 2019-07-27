import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Link } from "@reach/router"
import Item from "../../components/Item/Item"

export default props => {
  const sectionRef = useRef(null)
  console.log(props)
  let [Posts, setPosts] = useState([])
  let currentPage = +props["*"] || 1

  useEffect(() => {
    async function fetchPosts() {
      let { data } = await axios.get(`/${props.apiPath}/${currentPage}.json`)
      setPosts(
        data.map((post, index) => ({
          ...post,
          index: 1 + index + (currentPage - 1) * 30,
        })),
      )
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
    fetchPosts()
  }, [currentPage, props.apiPath])

  return (
    <>
      {/* <p>Current page {currentPage}</p> */}
      <section ref={sectionRef} className="items">
        {Posts.map(post => (
          <Item key={post.id} {...post} />
        ))}
      </section>
      {+props.lastPage !== currentPage && (
        <Link className="nextPageBtn" to={`${+currentPage + 1}`}>
          More
        </Link>
      )}
    </>
  )
}
