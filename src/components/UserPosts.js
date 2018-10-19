import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userPosts } from '../actions/postActions';
import Post from './Post.js'
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';

class UserPosts extends React.Component {
  //
  // componentWillMount = () => {
  //   this.props.userPosts();
  // }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  renderUserPosts() {

    console.log(this.props.posts)

    return this.props.posts.map((post, id) => <Post delete={this.props.delete} key={id} title={post.title} text={post} body={post.body} />)
  }

    render() {
      console.log(this.props)
      if (localStorage.getItem("jwtToken")){
        return (
          <div>
        {this.renderUserPosts()}
        </div>
        );
      }else{
        return <BrowserRouter><Redirect to="/signin" /></BrowserRouter>
      }
    }
  }

    UserPosts.propTypes = {
      posts: PropTypes.array.isRequired,
      newPost: PropTypes.object,
      userposts: PropTypes.array
    }

    const mapStateToProps = state => ({
      posts: state.posts.items,
      newPost: state.posts.item
    })

    const mapDispatchToProps = dispatch => {
  return {
    // delete: post => dispatch({type: 'DELETE_POST', payload: post }),
    UserPosts: () => dispatch(UserPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
