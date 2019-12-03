import React from 'react';
import { Jumbotron} from 'reactstrap';

export const NoMatch = props => {
  return(
    <Jumbotron>
      <h1>404 - Resource Not Found</h1>
      <span>Seat's Taken!</span>
      <a href="/home">Home</a>
    </Jumbotron>
  );
};
    

   