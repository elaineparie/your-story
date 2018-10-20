import React from 'react';
import Posts from '../Posts';
import PostForm from '../Postform';
import { logoutUser } from '../../services/user'



const handleLogout = () => {
  debugger
  logoutUser()
}

class PostPage extends React.Component {

  render() {
    return (
      <div>
      <br />
      <button onClick={this.handleLogout}>Log out</button>
      <hr />
    <PostForm />
    <Posts />
  </div>);
  }
}

export default PostPage
