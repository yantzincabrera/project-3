import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Home.css";
//import {Feed} from '../Feed/feed.js';
import EssayForm from '../UserPost/UserPost.js';
import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            name:'',
            lastname:'',
            email:'',
            error: {}
        }
    }
    componentWillMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
        name: decoded.name,
        lastname: decoded.lastname,
        email: decoded.email
        })
  }
    
    //handelLoginUser = user => {
      //  debugger
        //this will check if user exist and log them in, if no user redirect to signup alert user does not exist
       // console.log("login user");
   // }

   // render() {
     //   {console.log(this.state)}
       // if(!this.state.toLogin) {
         //   return <Redirect to='/login'/>
        //}
        render(){

            return (
                <div>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Remember Me</h1>
    <p class="lead"> <h2>Losing a loved one is never easy, but remebering them is vital to keeping their legacy alive.</h2>
    
    "What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others." ~ Pericles</p>
  </div>
</div>
        <EssayForm />
        <div>
            
        </div>
    </div>
    );
}
}

export default Home;


