import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux'
import routes from './routes'
import PostPage from './components/presentational/PostPage'
import Home from './components/presentational/Home'
import UserPosts from './components/presentational/UserPosts'
import About from './components/presentational/About'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import store from './store';


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
      to="/"
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
    <NavLink
      to="/userposts"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Your Chapters</NavLink>
  </div>;


class App extends Component {
  render() {

    // if (localStorage.getItem("jwtToken")){
      return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
            </header>
            <PostForm />
            <hr />
            <Posts />
            <Home />
          </div>
        </Provider>
        // <Provider store={store}>
        //   <Router>
        //     <React.Fragment>
        //      <Navbar />
        //         <Route exact path="/" render={Home} />
        //         <Route path="/posts" component={PostPage} />
        //         <Route exact path="/about" render={About} />
        //         <Route exact path="/signup" component={SignUp} />
        //         <Route exact path="/userposts" component={UserPosts} />
        //         <Route path="/signin" component={SignInForm} />
        //     </React.Fragment>
        //   </Router>
        // </Provider>
      );
    // }

  }
}

export default App;
