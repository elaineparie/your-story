import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/presentational/Home'
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import routes from './routes'
import PostPage from './components/presentational/PostPage'
import About from './components/presentational/About'
import SignUp from './components/SignUp'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
// import store from './store';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';




const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const Navbar = () =>
  <div>
    <NavLink
      to="/home"
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/posts"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Post Feed</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
  </div>;




class App extends Component {

  state = {
    isLoggedIn: false
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
         <React.Fragment>
          <Navbar />
          <Route exact path="/home" component={Home} />
          <Route path="/posts" component={PostPage} />
          <Route exact path="/about" render={About} />
          <Route exact path="/signin" component={SignInForm} />
          <Route exact path="/" render={(props) => <SignUpForm {...props}/> } /><SignInForm />

         </React.Fragment>
       </Router>
       </Provider>

    );
  }
}

export default App;
