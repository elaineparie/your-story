import React from 'react';
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home = props =>
 <div><h1 className="header">Welcome to your story! Where your life writes the narrative. </h1>
<button><Link to={`/posts`} >Write today's chapter...</Link></button>


</div>


 export default Home;
