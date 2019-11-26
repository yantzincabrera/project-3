import React from 'react';
import './Login.css'

 

export const Login = props => {
    return (
       <div className="Body">
           <header className="Login-Header">Log-in</header>
                <div className="Container">
                    <form>
                        <div className="form-group">
                            <label >Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ></input>
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" ></input>
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




