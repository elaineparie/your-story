import React from 'react'

const Post = props => {
  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
      <span></span><button>DELETE</button>
    </div>
  )
}

export default Post;
