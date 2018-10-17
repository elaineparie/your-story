import { FETCH_USERS, NEW_USER } from './types';
import axios from 'axios';


export const fetchUsers = () => dispatch => {
    fetch('http://localhost:3001/api/v1/users')
    .then(res => res.json())
    .then(users => dispatch({
      type: FETCH_USERS,
      payload: users
    })).catch(error => console.log("my error ", error));
}


export const createUser = (postData) => dispatch => {
  debugger
  fetch('http://localhost:3001/api/v1/users', {
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
  dispatch({type: NEW_USER, payload: data})
}).catch(error => console.log("my error ", error));
};




// 
// export const AUTHENTICATED = 'authenticated_user';
// export const UNAUTHENTICATED = 'unauthenticated_user';
// export const AUTHENTICATION_ERROR = 'authentication_error';
//
// const URL = 'http://localhost:3001';
//
// export function signInAction({ email, password }, history) {
//   return async (dispatch) => {
//     try {
//       debugger
//       const res = await axios.post(`${URL}/signin`, { email, password });
//
//       dispatch({ type: AUTHENTICATED });
//       localStorage.setItem('user', res.data.token);
//       history.push('/secret');
//     } catch(error) {
//       dispatch({
//         type: AUTHENTICATION_ERROR,
//         payload: 'Invalid email or password'
//       });
//     }
//   };
// }
