import React from 'react';
import Posts from '../Posts';
import PostForm from '../Postform';
import { logoutUser } from '../../services/user'





class PostPage extends React.Component {

  render() {
    return (
      <div>
      <button onClick={this.handleLogout}>Log out</button>
    <PostForm />
    <Posts />
  </div>);
  }
}

export default PostPage
