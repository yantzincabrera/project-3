import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Home.css";
//import {Feed} from '../Feed/feed.js';
import EssayForm from '../UserPost/UserPost.js';


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


