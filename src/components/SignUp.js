import React from 'react';
import SignUpForm from './SignUpForm.js'
import LoginForm from './LoginForm'

class SignUp extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="signupform">

        <SignUpForm />

        <hr />

        <LoginForm />

        </div>
      </div>);
  }
}



export default SignUp
