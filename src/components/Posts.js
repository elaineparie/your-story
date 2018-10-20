import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePostId } from '../actions/postActions';
import Post from './Post.js'
import { bindActionCreators } from 'redux';
import { Redirect, BrowserRouter } from 'react-router-dom';
import { logoutUser } from '../services/user'





class Posts extends React.Component {

  handleOnClick = (id) => {
    this.props.deletePost(id);
    deletePostId(id);
  }

  componentWillMount = () => {
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

 handleLogout = () => {
    logoutUser()
    this.setState({
      isLoggedIn: false
    })
  }


  renderPosts() {
    // const postsArray = (Array.from(this.props.posts))

    //use dot notation or for loop
    console.log(this.props.posts)
    const {deletePost} = this.props.posts

    return this.props.posts.map((post, id) => <Post deletePost={this.handleOnClick} key={id} title={post.title} text={post} body={post.body} />)
  }

    render() {
      console.log(this.props)
      if (localStorage.getItem("jwtToken")){
        return (
          <div>
        {this.renderPosts()}

        <hr />
        <button onClick={this.handleLogout}>Log out</button>
        <br />
        </div>
        );
      }else{
        return <Redirect to="/" />
      }
    }
  }

    Posts.propTypes = {
      fetchPosts: PropTypes.func.isRequired,
      posts: PropTypes.array.isRequired,
      newPost: PropTypes.object
    }

    const mapStateToProps = state => ({
      posts: state.posts.items,
      newPost: state.posts.item
    })

    const mapDispatchToProps = dispatch => {
  return {
    deletePost: post => dispatch({type: 'DELETE_POST', payload: post }),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
