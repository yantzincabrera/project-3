import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Home.css";
//import {Feed} from '../Feed/feed.js';
import UserPost from '../UserPost/UserPost.js';

class Home extends React.Component {
    constructor (props) {
        super(props);
        this.state= {
            user: {},
            toLogin: true
        }
    }
    componentWillMount(){
        if(this.state.user.length === 0) {
            this.setState(this.toLogin =false)
        }
    }
    
    handelLoginUser = user => {
        debugger
        //this will check if user exist and log them in, if no user redirect to signup alert user does not exist
        console.log("login user");
    }

    render() {
        {console.log(this.state)}
        if(!this.state.toLogin) {
            return <Redirect to='/login'/>
        }
return (
    <div>
        <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Remember Me</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>
        <UserPost />
    </div>
    );
  }
}
export default Home;


