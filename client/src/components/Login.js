import React, { Component }from "react";
import './Login.css'
import { login } from "./UserFunction";

 
class Login extends Component{
constructor(){
    super()
    // Setting the component's initial state
    this.state = {
        email: '',
        password: '' 
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}
// Getting the value and name of the input which triggered the change
// Updating the input's state
onChange(e){

    this.setState({[e.target.name]: e.target.value})
}
onSubmit(e){
    e.preventDefault()

    const user = {
        email: this.state.email,
        password: this.state.password
    }
    login(user).then(res => {
        if(res){
            this.props.history.push(`/Memorial`)
        }
    })
}

render(){
    return (
        <div className="Body">
            <header className="Login-Header">Log-in</header>
                <div className="Container">
                    <form noValidate onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label >Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" defaultValue="" onChange={this.onChange} ></input>
                    </div>
                    <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" defaultValue="" onChange={this.onChange}></input>
                    </div>
                    <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" >Keep Me!</label>
                    </div>
                    <button type="submit" className="Btn" >Submit</button>
                    <button type="signup" className="Btn2" >Sign-Up!</button>
                    </form>
                </div>
            </div>
        );        
    }
}
export default Login



