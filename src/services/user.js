import { Redirect, BrowserRouter } from 'react-router-dom';
import React from 'react';
export function signInUser(signInParams) {
  const body = JSON.stringify(signInParams)
  return fetch('http://localhost:3001/signin', {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then(response => response.json())
    // .then(response => {
    //   const {user, jwt} = response
    //   localStorage.setItem("jwtToken", jwt)
    // })

  //   .then((data) => {
  //   // console.log(data)
  // });
}


export function logoutUser() {
  localStorage.removeItem("jwtToken")
}
