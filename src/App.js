import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/presentational/Home'


class App extends Component {
  render() {
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
    );
  }
}

export default App;
