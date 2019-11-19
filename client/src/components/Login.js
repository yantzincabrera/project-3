import React from 'react';
import './Login.css'

 

export const Login = props => {
    return (
       <div className="Body">
           <header className="Login-Header">Login</header>
            <div className="Container">
            <form>
              <div className="form-group">
                  <label >Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email"></input>
              </div>
              <div className="form-group">
                  <label >Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                 <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" >Check me out</label>
                </div>
                    <button type="submit" className="Btn" >Submit</button>
            </form>
            </div>
       </div>
    );        
}




