import React from 'react';
import SignUpForm from './SignUpForm.js'
import SignInForm from './SignInForm.js'

class SignUp extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="signupform">

        <SignUpForm />
        <hr />

        <SignInForm />
        </div>
      </div>);
  }
}



export default SignUp
