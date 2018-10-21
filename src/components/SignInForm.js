import React, {PropTypes} from 'react';
import { signInUser } from '../services/user'
import { Redirect } from 'react-router-dom'

class SignInForm extends React.Component {
    state = {
      email: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault()

      const signInParams = { email: this.state.email, password: this.state.password }
      signInUser(signInParams)
      .then((user) => {

        localStorage.setItem("jwtToken", user.jwt)

        this.setState({
          email: "",
          password: ""
        })



      })

      const body = JSON.stringify(signInParams)


    }

    handleEmailChange = (event) =>{
      this.setState({
        email: event.target.value
      })
    }

    handlePasswordChange = (event) => {
      this.setState({
        password: event.target.value
      })
    }

  render() {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/posts"/>
    } else {

    return (

      <form onSubmit={this.handleSubmit}>
      <h1>Login</h1>

      <div className="form-group">
      <label className="control-label">Email</label>
      <input
      placeholder="email"
      value={this.state.email}
      type="text"
      onChange={this.handleEmailChange}
      name="email"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <label className="control-label">Password</label>
      <input
      placeholder="password"
      value={this.state.password}
      type="password"
      onChange={this.handlePasswordChange}
      name="password"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <button className="btn btn-primary btn-lg">
      Sign In
      </button>
      </div>
      </form>
      );
    }
  }
}

export default SignInForm;
