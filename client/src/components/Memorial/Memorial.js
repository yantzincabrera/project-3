import React from 'react';
import './Memorial.css';

export const Memorial = props => {
    return (
     //These div tags are needed outside of our components
        <div> 
            
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7DNa-ioul7lsmLZOLahFh8yAcuSHO_-4V4rOvgqCq7qu5Kqm&s" class="memorialImage" alt="..."></img> 
                <div className='memorialBio'>
                    <p className='memorialUserInput'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className="memorialComments"> Tributes
            <div className="memorialUserComments">UserComments</div>
            </div>
        </div>

  
    );
}