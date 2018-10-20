import React from 'react';
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Redirect, BrowserRouter } from 'react-router-dom';

// class Home extends React.Component {
//   render(){
// if (localStorage.getItem("jwtToken")){
// return(
//  <div><h1 className="header">Welcome to your story! Where your life writes the narrative. </h1>
// <button><Link to={`/posts`} >Write today's chapter...</Link></button>})
// else{
//   return <Redirect to="/" />
// }
//
//
// </div>
// }
// }

class Home extends React.Component {
    render() {

      if (localStorage.getItem("jwtToken")){
        return (
          <div>
      <h1 className="header">Welcome to your story! Where your life writes the narrative.</h1>
      <button><Link to={`/posts`} >Write today's chapter...</Link></button>
        </div>
        );
      }else{
        return <Redirect to="/" />
      }
    }
  }


 export default Home;
