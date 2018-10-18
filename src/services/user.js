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
  //   .then((data) => {
  //   // console.log(data)
  // });
}
