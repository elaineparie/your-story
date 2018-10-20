import { FETCH_POSTS, NEW_POST, USER_POSTS, DELETE_POST } from './types';


export const fetchPosts = () => dispatch => {
    fetch('http://localhost:3001/api/v1/posts', {
      headers: {
        'content-type': 'application/json',
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOH0.sdz2a2JQ0JV2rMKiXbRJAH-pu4bYKPesMg-4wQ2AbH0"
      }
    })
    .then(res => res.json())
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
      'content-type': 'application/json',
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOH0.sdz2a2JQ0JV2rMKiXbRJAH-pu4bYKPesMg-4wQ2AbH0"
    },
    body: JSON.stringify(postData)
  })
.then(function(response){
  return response.json()})
.then(function(data) {
  dispatch({type: NEW_POST, payload: data})
}).catch(error => console.log("my error ", error));
};


export const deletePostId = (id) => dispatch => {
    fetch('http://localhost:3001/posts/' + id, {
      method: 'delete'
  })
  .then(response =>
  response.json().then(json => {
    return json;
  })
)
}
