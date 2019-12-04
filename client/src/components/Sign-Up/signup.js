import React, { Component }from "react";
import './signup.css'
//import RenderToLayer from "material-ui/internal/RenderToLayer";
import { register } from "../UserFunction";

class Register extends Component {
constructor(){
    super()
    // Setting the component's initial state
    this.state ={
        name: '',
        lastname:'',
        email:'',
        password: '' 
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){ 
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
          }
          register(newUser).then(res => {this.props.history.push(`/login`)})
    }
    
    render(){
        return(
            <div className="Container">
                <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" className="form-control" id="exampleInputFirst" 
                    name="name"aria-describedby="firstHelp" defaultValue="" onChange={this.onChange}></input>
                </div>

                <div className="form-group">
                    <label >Lastname</label>
                    <input type="text" className="form-control" id="exampleInputlast" 
                    name="lastname"aria-describedby="lastHelp" defaultValue="" onChange={this.onChange}></input>
                </div>

                <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                    name="email" aria-describedby="emailHelp" defaultValue="" onChange={this.onChange}></input>
                </div>

                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                    name="password" defaultValue="" onChange={this.onChange}></input>
                </div>

                    <button type="submit" className="Btn" >Submit</button>


                </form>
            </div>
        )
    }
}

export default Register

