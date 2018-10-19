//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/postActions';
// import { bindActionCreators } from 'redux';
// import { Redirect, BrowserRouter } from 'react-router-dom';
//
//
//
// class Posts extends React.Component {
//
//   componentWillMount() {
//     this.props.fetchPosts();
//   }
//
//   componentWillReceiveProps(nextProps) {
//     if(nextProps.newPost) {
//       this.props.posts.unshift(nextProps.newPost)
//     }
//   }
//
//     render() {
//        // if (localStorage.getItem("jwtToken")){
//        console.log(this.props.posts)
//       const postItems = this.props.posts.map(post => (
//         <div key={post.id}>
//         <h3 className="title">{post.title}</h3>
//         <p>{post.body}</p>
//         </div>
//       ));
//       return (
//         <div>
//         <h1 className="title">Posts</h1>
//        {postItems}
//         </div>
//       );
//     // }
//     //   else{
//     //     return <BrowserRouter><Redirect to="/signin" /></BrowserRouter>
//     //   }
//     }
//   }
//
//     Posts.propTypes = {
//       fetchPosts: PropTypes.func.isRequired,
//       posts: PropTypes.array.isRequired,
//       newPost: PropTypes.object
//     }
//
//     const mapStateToProps = state => ({
//       posts: state.posts.items,
//       newPost: state.posts.item
//     })
//
// export default connect(mapStateToProps, { fetchPosts })(Posts);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Post from './Post.js'
import { bindActionCreators } from 'redux';
import { Redirect, BrowserRouter } from 'react-router-dom';



class Posts extends React.Component {

  componentWillMount = () => {
    this.props.fetchPosts();
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  renderPosts() {
    // const postsArray = (Array.from(this.props.posts))

    //use dot notation or for loop
    console.log(this.props.posts)

    return this.props.posts.map((post, id) => <Post delete={this.props.delete} key={id} title={post.title} text={post} body={post.body} />)
  }

    render() {
      console.log(this.props)
      if (localStorage.getItem("jwtToken")){
        return (
          <div>
        {this.renderPosts()}
        </div>
        );
      }else{
        return <BrowserRouter><Redirect to="/signin" /></BrowserRouter>
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
    // delete: post => dispatch({type: 'DELETE_POST', payload: post }),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
