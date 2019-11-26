import React from 'react';
import "./UserPost.css";


class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'this is the only thing working so far, it shows as a tribute',
      firstName: '',
      lastName: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showPost: true,
    });
    console.log(this.state.value);
    console.log(this.state.name);
  }

  clearForm = () => {
    this.state.reset();
  }

  render() {
    return (
//first and last name
   
    <form onSubmit={this.handleSubmit}>
        <div className="form-row">
        <div className="col">
          <input 
          type="text"
          name="firstName" 
          //value={this.state.firstName}
          class="form-control" 
          placeholder="First name" 
          onChange={this.handleChange}/>
        </div>
        <div className="col">
          <input 
          type="text"
          name="lastName" 
          class="form-control" 
          placeholder="Last name" 
          onChange={this.handleChange}/>
        </div>
        </div>
          <textarea class="form-control" id="validationTextarea" value={this.state.value} onChange={this.handleChange}></textarea>
        
        <div className="uploadButton"><input type="file" name="imgUpload"/></div>  
        <div className="submitButton">
          <button 
          variant="contained" 
          class="btn btn-primary"  
          type="button" 
          value="Submit" 
          onClick={this.handleSubmit}>Post</button>
        </div> 
        <div className="tributeLabel"> Tributes
            {this.state.showPost && <div className="newPost">{this.state.value}</div>}
        </div>
      </form>
     
    );
  }

}
export default EssayForm;