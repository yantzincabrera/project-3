import React from "react";
import './signup.css'

export const Signup = props => {
    return (
        <div className="Background">
        <header className="Signup-Header">Create an Account</header>
         <div className="Container">
         <form>
         <div className="form-group">
               <label >First Name</label>
               <input type="first" className="form-control" id="exampleInputFirst" aria-describedby="firstHelp"></input>
           </div>

           <div className="form-group">
               <label >Last Name</label>
               <input type="last" className="form-control" id="exampleInputLast" aria-describedby="lastHelp"></input>
           </div>

           <div className="form-group">
               <label >Email</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
           </div>
           <div className="form-group">
               <label >Password</label>
               <input type="password" className="form-control" id="exampleInputPassword1"></input>
             </div>
                 <button type="submit" className="Btn" >Submit</button>
         </form>
         </div>
    </div>
    );
}