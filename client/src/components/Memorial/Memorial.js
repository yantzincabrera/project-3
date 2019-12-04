import React from 'react';
import './Memorial.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  class Memorial extends React.Component {
  
  render(){

  
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://media.gq.com/photos/5ab92aa2828c097e1c21d599/3:4/w_539,h_719,c_limit/coco.jpg"alt="Card image cap" />
          <CardBody>
            <CardTitle>Name</CardTitle>
            <CardSubtitle>Details</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };
}
  
  export default Memorial;
