import React from 'react';
import Posts from '../Posts';
import PostForm from '../Postform';





class PostPage extends React.Component {

  render() {
    return (
      <div>
    <PostForm />
    <Posts />
  </div>);
  }
}

export default PostPage
