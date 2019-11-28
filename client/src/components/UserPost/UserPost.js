import React from 'react';
import "./UserPost.css";
//import { EditorModeComment } from 'material-ui/svg-icons';
//import { DatePicker } from 'react-datepicker';
import datePassed from '../DatePassed/datePassed.js';




class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Once upon a time .......',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value,
   });
    
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
    <form onSubmit={this.handleSubmit}> <label>Give us infromation about your loved one</label>
      <div className="datePassed"> When did they pass away?
     <datePassed />
      </div>
      <div className="form-row"> What was their name?
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
      </div>Tell us about them, like your favorite memory.
          <textarea class="form-control" id="validationTextarea" value={this.state.value} onChange={this.handleChange}></textarea>
        
      <div className="uploadButton">Share a picture of your loved one<input type="file" name="imgUpload"/></div>  
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