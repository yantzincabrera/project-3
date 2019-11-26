import React from 'react';
import "./UserPost.css";


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'What would you like to express?',

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showPost: true,
    });
    console.log(this.state.value);
  }

  clearForm = () => {
    this.state.reset();
  }

  render() {
    return (
//first and last name
   
      <form onSubmit={this.handleSubmit}>
          <textarea class="form-control" id="validationTextarea" value={this.state.value} onChange={this.handleChange}></textarea>
        
        <div className="uploadButton"><input type="file" name="imgUpload"/></div>  
        <div  className="submitButton"><button variant="contained" color="primary" className="submitButton" type="button" value="Submit" onClick={this.handleSubmit}>Post
          </button></div> 
          {this.state.showPost && <div className="newPost">{this.state.value}</div>}
      </form>
     
    );
  }

}
export default EssayForm;