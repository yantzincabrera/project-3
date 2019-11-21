import React from 'react';
//import "./UserPost.css";

class UserPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Insert text here.'
      };
      
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  alert('This is a post: ' + this.state.value);
  event.preventDefault();
}
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Post:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" vslue="Submit" />
      </form>
    );
  }
}
export default UserPost;