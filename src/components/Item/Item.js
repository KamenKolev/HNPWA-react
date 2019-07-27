import React from "react"
import "./Item.css"

export default ({
  index,
  title,
  points,
  user,
  time,
  time_ago,
  type,
  url,
  domain,
  comments_count,
}) => (
  <article class="itemPreview">
    <div className="left">{index}</div>
    <div className="right">
      <h2>
        <a href={url}>{title}</a>
        <small> ({domain})</small>
      </h2>
      <span>
        {points} points by{" "}
        <a href={"https://news.ycombinator.com/user?id=" + user}>{user}</a>{" "}
        {time_ago} | HIDE | {comments_count} comments
      </span>
    </div>
  </article>
)
