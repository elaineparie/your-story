import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(res => console.log(res))
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    })).catch(error => console.log("my error ", error));
}


export const createPost = (postData) => dispatch => {
  fetch('http://localhost:3001/api/v1/posts', {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

.then(function(response){
  return response.json()})
.then(function(data) {
  dispatch({type: NEW_POST, payload: data})
}).catch(error => console.log("my error ", error));
};


// export const deletePost = postId => {
//   return dispatch => {
//     return fetch(`http://localhost:3001/api/v1/posts/${postId}`, {
//       method: "DELETE",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({post: postId})
//     })
//       .then(response => response.json())
//       .then(post => {
//         dispatch(destroyPost(post))
//       })
//       .catch(error => console.log(error))
//   };
// }
