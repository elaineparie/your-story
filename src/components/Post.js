
import React from 'react'
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';




const Post = props => {

  return (
    <div>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <div>
    <Button className="btn btn-outline-secondary" onClick={() => props.deletePost(props.text.id)}>delete</Button>
    </div>
    </div>
  )
}

export default Post;
