//import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Home.css";
//import {Feed} from '../Feed/feed.js';
import EssayForm from '../UserPost/UserPost.js';
import React, { Component } from 'react'
//import jwt_decode from 'jwt-decode'



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
   // componentWillMount(){
     //   const token = localStorage.usertoken
       // const decoded = jwt_decode(token)
       // this.setState({
       // name: decoded.name,
        //lastname: decoded.lastname,
        //email: decoded.email
       // })
  //}
    
    //handelLoginUser = user => {
      //  debugger
        //this will check if user exist and log them in, if no user redirect to signup alert user does not exist
       // console.log("login user");
   // }


    render() {
        {console.log(this.state)}
        if(!this.state.toLogin) {
            return <Redirect to='/login'/>
        }
        
return (
    <div className="HomeBackground">
        <div className="Jumbotron">
  <div className="container-h">
   
    <p className="lead"> <h2>Losing a loved one is never easy, but remembering them is vital to keeping their legacy alive.</h2>
    </p>

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


