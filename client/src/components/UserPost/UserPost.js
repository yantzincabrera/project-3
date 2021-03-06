import React, { Component } from 'react';
import "./UserPost.css";
import { addToBlog } from "../Blog.functions";


class EssayForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '', 
      post_bio: '',

    };

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
      this.setState({[e.target.name]: e.target.value})
      }
  handleSubmit = (e) => {
    e.preventDefault()

  handleChange(event) {
    this.setState({ 
      [event.target.name]: event.target.value,
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

    const newPost = {
        name: this.state.name,
        lastname: this.state.lastname,
        post_bio: this.state.post_bio
        
      }
      addToBlog(newPost).then(res => console.log("success"))
}

  render() {
    return ( 
      <div className="FormBackground">

    <form className="feedForm" onSubmit={this.handleSubmit} >
    <label className="FormHeading">Who is your loved one?</label>
      <div className="datePassed"></div>
      <div className="form-row">What was his/her name?</div>
      <div className="row">
        <div className="col">
       
          <input 
        
          type="text"
          name="firstName" 
          className="form-control" 
          placeholder="First name" 
          defaultValue=""
          onChange={this.handleChange}/>
          </div>
        <div className="col">
          <input 
          type="text"
          name="lastName" 
          className="form-control" 
          placeholder="Last name" 
          defaultValue=""
          onChange={this.handleChange}/>
          </div>
        </div>
      
      <div>

      <i class="large material-icons">add_a_photo</i>
        <input
        name='imageUp' 
        type='file' 
        value={this.state.value}
       onChange={this.handleChange}/>
      </div>
      <div className="TextBio">
          <textarea 
          className="form-control" 
          id="validationTextarea" 
          placeholder="Tell us about them, like your favorite memory?"
          name='textBio' 
          defaultValue=""
          onChange={this.handleChange}>
          </textarea> 
      </div>
      <div className="submitButton">
          <button 
          variant="contained" 
          className="btn btn-warning"  
          type="button" 
          value="Submit" 
          onClick={this.handleSubmit}>Post</button>
      </div> 
    
      <div className="tributeLabel"> Tributes </div>
      {this.state.showPost && 
      <div className="card" >

        <img src={this.state.imageUp} alt="UploadedImage"/>
      <div className="card-link">
          <h5 className="card-title"> {this.state.firstName} {this.state.lastName}</h5>
          <p className="card-text"> {this.state.textBio}</p>

    </div>
    </div>}
    </form>
    </div>
    
    
    )
  }
}
export default EssayForm;

