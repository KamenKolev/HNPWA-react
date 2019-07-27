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
  <article className="itemPreview">
    <div className="left">{index}</div>
    <div className="right">
      <h2>
        <a href={url}>{title}</a>
        {domain && <small> ({domain})</small>}
      </h2>
      {points && <span>{points} points </span>}
      {user && (
        <span>
          by <a href={"https://news.ycombinator.com/user?id=" + user}>{user}</a>
        </span>
      )}
      {time_ago && <span> {time_ago}</span>}
      {comments_count && <span> | {comments_count} comments </span>}
    </div>
  </article>
)
