import React, {PropTypes} from 'react';
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';
import { addLike } from '../actions/postActions'
import { connect } from 'react-redux';

class PostLikeButton extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.post.text.likes,
    }

        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
      console.log(this.props.post.text.likes)
    this.setState({
      counter: this.state.counter + 1
    })
      this.props.addLike(this.props.post.text, this.state.counter)
      // this.props.post.text,
  }


  render() {
    return (<div>
      <Button className="btn btn-outline-secondary" onClick={this.onClick}>Like</Button>
      <span>{this.state.counter}</span>
      </div>);
  }
}

export default connect(null, { addLike })(PostLikeButton)
