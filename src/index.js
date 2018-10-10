import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import routes from './routes'
import PostPage from './components/presentational/PostPage'
import Home from './components/presentational/Home'
import { Provider } from 'react-redux'
import store from './store';
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
    >Posts</NavLink>
  </div>;



ReactDOM.render((
  <Provider store={store}>
  <Router>
      <React.Fragment>
       <Navbar />
    <Route path="/posts" component={PostPage} />
    <Route exact path="/" render={Home} />

    </React.Fragment>
  </Router>
  </Provider>),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
