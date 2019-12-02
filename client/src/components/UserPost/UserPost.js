import React from 'react';
import "./UserPost.css";

//import datePassed from '../DatePassed/datePassed.js';





class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textBio: '',
      firstName: '',
      lastName: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value
   });
    
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      showPost: true,
    });
    console.log(this.state);
   
  }

  clearForm = () => {
    this.state.reset();
  }

  

  render() {
    return (
    <form onSubmit={this.handleSubmit}> <label>Who is your loved one?</label>
      <div className="datePassed"></div>
      <div className="form-row">What was his/her name?
      <div className="col">
          <input 
          type="text"
          name="firstName" 
          className="form-control" 
          placeholder="First name" 
          value={this.state.value}
          onChange={this.handleChange}/>
      </div>
      <div className="col"> 
          <input 
          type="text"
          name="lastName" 
          className="form-control" 
          placeholder="Last name" 
          value={this.state.value}
          onChange={this.handleChange}/>
      </div>
      </div>
      <div ClassName="col">
          <textarea 
          className="form-control" 
          id="validationTextarea" 
          placeholder="Tell us about them, like your favorite memory?"
          name='textBio' 
          value={this.state.value} 
          onChange={this.handleChange}>
          </textarea> 
      </div>
      <div className="submitButton">
          <button 
          variant="contained" 
          className="btn btn-primary"  
          type="button" 
          value="Submit" 
          onClick={this.handleSubmit}>Post</button>
      </div> 
     
 
      
      <div className="tributeLabel"> Tributes
            {this.state.showPost && 
            <div className="lovedoneName">
              {this.state.firstName} {this.state.lastName}
            <div>
              {this.state.textBio}
              </div>
              </div> }
            
      </div>
      </form>
     
    );
  }

}
export default EssayForm;