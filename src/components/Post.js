
import React from 'react'

function handleOnClick() {
  this.props.deletePost(this.props.post.id);
}

const Post = props => {

  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <button onClick={() => this.handleOnClick()}> X </button>
    </div>
  )
}

export default Post;
