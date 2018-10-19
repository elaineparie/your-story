
import React from 'react'



const Post = props => {

  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <button onClick={() => props.delete(props.text.id)}> X </button>
    </div>
  )
}

export default Post;
