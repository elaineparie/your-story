import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3001/api/v1/posts')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }))
}


export const createPost = (postData) => dispatch => {
  fetch('http://localhost:3001/api/v1/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

.then(function(response) {
  // return response.json();
}).then(function(data) {
  console.log(data)
})
};
