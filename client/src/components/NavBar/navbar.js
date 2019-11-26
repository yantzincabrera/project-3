import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = props => {
        return (
            <div>
                      
                    <a class="navbar-brand" >Remember Me</a>
                   
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="Nav-Link"><Link to='/'>Home</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link"><Link to='/help'>Help</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">About</a>
                    </li>
                  
                </ul>
                
            </div>

    
                );
            }


        



