import React, {PropTypes} from 'react';
import { FormGroup, Button, Label, Jumbotron} from 'react-bootstrap';

export default class PostLikeButton extends React.Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
    }

    handleLikeClick = () => {
      console.log(this.state.counter)
    this.setState({
      counter: this.state.counter + 1
    })
  }


  render() {
    return (<div>
      <Button className="btn btn-outline-secondary" onClick={this.handleLikeClick}>Like</Button>
      <span>{this.state.counter}</span>
      </div>);
  }
}
