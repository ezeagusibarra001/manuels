import {Carousel} from '3d-react-carousal';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CarruselServicios(){
  let slides = [
    <Card style={{ width: '50%' }} alt="1">
      <Card.Img variant="top" src="https://picsum.photos/800/301/?random" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>,
     <Card style={{ width: '50%' }}  alt="2">
     <Card.Img variant="top" src="https://picsum.photos/800/301/?random" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
     </Card.Body>
   </Card>,
     <Card  style={{ width: '50%' }} alt="3">
     <Card.Img variant="top" src="https://picsum.photos/800/301/?random" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
       <Button variant="primary">Go somewhere</Button>
     </Card.Body>
   </Card>,

  ];
  return <Carousel slides={slides} autoplay={true} interval={10000} />;
}

export default CarruselServicios;


    
