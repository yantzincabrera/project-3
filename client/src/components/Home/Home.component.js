import React from 'react';
import {Redirect} from 'react-router-dom';
import "./Home.css";

//import { Alert } from 'reactstrap';


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
            <div className="Jumbotron">
                <h1 className="display-4">Remember Me</h1>
            <div className="form-group">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
                <input class="btn btn-primary" type="submit" value="Post"></input>
             </div>
            </div>
        );
    }
};

export default Home;


