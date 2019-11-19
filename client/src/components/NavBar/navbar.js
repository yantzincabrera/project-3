import React from 'react';
import './NavBar.css'

export const NavBar = props => {
        return (
            <div>
                      
                    <a class="navbar-brand" href="#">Remember Me</a>
                   
                <ul className="nav justify-content-end">
                    
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">Help</a>
                    </li>
                    <li className="nav-item">
                        <a className="Nav-Link" href="#">About</a>
                    </li>
                  
                </ul>
                
            </div>

    
                );
            }


        



