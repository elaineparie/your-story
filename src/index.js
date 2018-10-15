import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import routes from './routes'
import PostPage from './components/presentational/PostPage'
import Home from './components/presentational/Home'
import UserPosts from './components/presentational/UserPosts'
import About from './components/presentational/About'
import SignUp from './components/SignUp'
import { Provider } from 'react-redux'
// import store from './store';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'


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


const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render((
  <Provider store={store}>
  <Router>
      <React.Fragment>
       <Navbar />
    <Route exact path="/" render={Home} />
    <Route path="/posts" component={PostPage} />
    <Route exact path="/about" render={About} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/userposts" component={UserPosts} />

    </React.Fragment>
  </Router>
  </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
