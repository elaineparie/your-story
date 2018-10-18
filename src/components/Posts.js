import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Post from './Post.js'
import { bindActionCreators } from 'redux'



class Posts extends React.Component {

  componentWillMount() {
     this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  renderPosts() {
    // const postsArray = (Array.from(this.props.posts))
    
    //use dot notation or for loop

    return this.props.posts.map((post, id) => <Post delete={this.props.delete} key={id} title={post.title} text={post} body={post.body} />)
  }

    render() {
      return (
        <div>
      {this.renderPosts()}
      </div>
      );
    }
  }

    Posts.propTypes = {
      fetchPosts: PropTypes.func.isRequired,
      posts: PropTypes.object,
      newPost: PropTypes.object
    }

    const mapStateToProps = state => ({
      posts: state.posts.items,
      newPost: state.posts.item
    })

    const mapDispatchToProps = dispatch => {
  return {
    delete: post => dispatch({type: 'DELETE_POST', payload: post }),
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
