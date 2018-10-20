import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions'
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';


class PostForm extends React.Component {
  constructor(props) {
// debugger
//     fetch('http://localhost:3001/api/v1/posts')
//     .then(response => response.json())
//     .then(json => {debugger})


    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body

    };

    this.props.createPost(post);

    this.setState({
      title: "",
      body: ""
    })

  }

  render() {
    return (
      <div>
      <h1><Jumbotron>Write your next chapter...</Jumbotron></h1>
      <form onSubmit={this.onSubmit}>
        <div>

          <Label className="label">Title:</Label><br />
          <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
        </div><br />
        <div>
         <FormGroup>
          <label className="label">Body:</label><br />
          <textarea name="body" value={this.state.body} onChange={this.onChange}/>
          </FormGroup>
        </div>
        <br />
        <Button bsStyle='info' type="submit">Submit</Button>
      </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}


export default connect(null, { createPost })(PostForm)
