import { FETCH_USERS, NEW_USER } from './types';


export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    })).catch(error => console.log("my error ", error));
  }


export const createUser = (postData) => dispatch => {
  fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      redirect: 'follow'
    },
    body: JSON.stringify(postData)
  })

.then(function(response){
  return response.json()})
.then(function(user) {
  localStorage.setItem("jwtToken", user.jwt)
  dispatch({type: NEW_USER, payload: user})
})
.catch(error => console.log("my error ", error));
};
