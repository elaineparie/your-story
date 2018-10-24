
import React from 'react'
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';
import PostLikeButton from './PostLikeButton'





const Post = props =>
<div>
<h2>{props.title}</h2>
<p>{props.body}</p>
<div>
<Button className="btn btn-outline-secondary" onClick={() => props.deletePost(props.text.id)}>delete</Button>
<PostLikeButton post={props} />
{console.log(props)}
</div>
</div>

export default Post;
