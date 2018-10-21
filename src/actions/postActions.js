import { FETCH_POSTS, NEW_POST, USER_POSTS, DELETE_POST } from './types';


export const fetchPosts = () => dispatch => {
  const token = localStorage.getItem("jwtToken")
    fetch('http://localhost:3001/api/v1/posts', {
      headers: {
        'content-type': 'application/json',
        "Authorization":"Bearer " + token
      }
    })
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    })).catch(error => console.log("my error ", error));
}


export const createPost = (postData) => dispatch => {
  const token = localStorage.getItem("jwtToken")
  fetch('http://localhost:3001/api/v1/posts', {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'content-type': 'application/json',
      "Authorization":"Bearer " + token
    },
    body: JSON.stringify(postData)
  })
.then(function(response){
  return response.json()})
.then(function(data) {
  dispatch({type: NEW_POST, payload: data})
}).catch(error => console.log("my error ", error));
};


export const deletePost = (id) => dispatch => {
  const token = localStorage.getItem("jwtToken")
    fetch('http://localhost:3001/api/v1/posts/' + id, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        "Authorization":"Bearer " + token
      }
  })
  .then(response => response.json())
    .then(function(data) {
      dispatch({type: DELETE_POST, payload: data})
    }).catch(error => console.log("my error ", error))
  }
