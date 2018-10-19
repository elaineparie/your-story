export function signInUser(signInParams) {
  const body = JSON.stringify(signInParams)
  return fetch('http://localhost:3001/signin', {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxOH0.sdz2a2JQ0JV2rMKiXbRJAH-pu4bYKPesMg-4wQ2AbH0"
    }
  })
    .then(response => response.json())
  //   .then((data) => {
  //   // console.log(data)
  // });
}
