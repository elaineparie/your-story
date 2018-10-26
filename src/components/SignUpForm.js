import React, {PropTypes} from 'react';
import { createUser } from '../actions/userActions'
import { connect } from 'react-redux';
import { signInUser } from '../services/user'
import { Redirect } from 'react-router-dom'


class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    onSubmit (e) {
      e.preventDefault()

      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
      const that = this
      this.props.createUser(user)
      this.props.history.push("/posts");

  }


  render() {
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/posts"/>
    } else {
        return (
          <form onSubmit={this.onSubmit}>
          <h1>Join our community</h1>

      <div className="form-group">
      <label className="control-label">Name</label>
      <input
      value={this.state.name}
      type="text"
      onChange={this.onChange}
      name="name"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <label className="control-label">Email</label>
      <input
      value={this.state.email}
      type="text"
      onChange={this.onChange}
      name="email"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <label className="control-label">Password</label>
      <input
      value={this.state.password}
      type="password"
      onChange={this.onChange}
      name="password"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <button
      className="btn btn-primary btn-lg">
      Sign Up
      </button>
      </div>
      </form>
      );
    }
  }
}



export default connect(null, { createUser })(SignUpForm)
