import React, {PropTypes} from 'react';
import { signInUser } from '../services/user'

class SignInForm extends React.Component {
    state = {
      email: '',
      password: ''
    }

    handleSubmit = (e) => {
      e.preventDefault()
      console.log(this);

      const signInParams = { email: this.state.email, password: this.state.password }
      signInUser(signInParams)
      .then((user) => {

        localStorage.setItem("jwtToken", user.jwt)
        console.log(user)
      })

      const body = JSON.stringify(signInParams)


      this.setState({
        email: "",
        password: ""
      })
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
    console.log(this.state)
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
      type="text"
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

export default SignInForm;




// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { signInAction } from '../actions/userActions';
// import { connect } from 'react-redux';
//
// class Signin extends Component {
//   submit = (values) => {
//     this.props.signInAction(values, this.props.history);
//   }
//
//   errorMessage() {
//     if (this.props.errorMessage) {
//       return (
//         <div className="info-red">
//           {this.props.errorMessage}
//         </div>
//       );
//     }
//   }
//
//   render() {
//     const { handleSubmit } = this.props;
//     return (
//       <div className="form">
//         <div className="container">
//           <h2>Sign In</h2>
//           <form onSubmit={ handleSubmit(this.submit) }>
//             <Field name="email"
//                    component="input"
//                    type="text"
//                    placeholder="Email"
//             />
//             <Field name="password"
//                    component="input"
//                    type="password"
//                    placeholder="Password"
//             />
//             <button type="submit" className="blue">Sign In</button>
//           </form>
//           {this.errorMessage()}
//         </div>
//       </div>
//     );
//   }
// }
//
// function mapStateToProps(state) {
//   return { errorMessage: state.auth.error };
// }
//
//
// const reduxFormSignin = reduxForm({
//   form: 'signin'
// })(Signin);
//
// export default connect(mapStateToProps, {signInAction})(reduxFormSignin);
