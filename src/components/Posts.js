import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions/postActions';
import Post from './Post.js'
import { bindActionCreators } from 'redux';
import { Redirect, BrowserRouter } from 'react-router-dom';
import { logoutUser } from '../services/user'
import PostLikeButton from './PostLikeButton'
import { addLike } from '../actions/postActions'





class Posts extends React.Component {

  state = {
    sortedPosts: [],
  }

  handleOnClick = (id) => {
    this.props.deletePost(id);
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

  onClick = (e) => {
  this.setState({
    counter: this.state.counter + 1
  })
    this.props.addLike(this.props.post.text, this.state.counter)
    // this.props.post.text,
}


  renderPosts() {

    console.log(this.props)

    return this.props.posts.map((post, id) => <Post deletePost={this.handleOnClick} postLikeButton={this.addLike} key={id} title={post.title} text={post} body={post.body} />)
  }

  sortPosts = () => {
    this.setState({
      sortedPosts: this.props.posts
    })

     // return

     this.state.sortedPosts.sort(function(a, b) {
       if (a.likes < b.likes) {
         return 1;
       }
       if (a.likes > b.likes) {
         return -1;
       }
       return 0;
     });
     return this.state.sortedPosts.map((post, id) => <Post deletePost={this.handleOnClick} key={id} title={post.title} text={post} body={post.body} />)


  }

    render() {
      console.log(this.props)
      if (localStorage.getItem("jwtToken")){
        return (
          <div>
          <button onClick={this.sortPosts}>Sort Posts</button>
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
    deletePost: (id) => dispatch(deletePost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    addLike: (post, likes) => dispatch(addLike(post, likes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
