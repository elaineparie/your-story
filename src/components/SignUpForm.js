import React, {PropTypes} from 'react';

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

  onSubmit(e) {
    e.preventDefault()
    // console.log(this.state);
    debugger
    fetch('http://localhost:3001/api/v1/users', {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user: this.state})
  }).then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("my error ", error));
    // make fetch request here
  }


  render() {
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
      type="text"
      onChange={this.onChange}
      name="password"
      className="form-control"
      />
      </div>

      <div className="form-group">
      <button className="btn btn-primary btn-lg">
      Sign Up
      </button>
      </div>
      </form>
    );
  }
}

export default SignUpForm
