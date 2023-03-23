import { Card, Container, Carousel } from "react-bootstrap";

const Cards = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <Card
            id="bike-card"
            className="d-flex flex-row align-self-end"
            style={{ height: "12rem", width: "25rem" }}
          >
            <Card.Img
              className="card-img-bottom"
              roundedCircle
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwlTBb3J3b0FJQvjpwEWPy4jvc0RPzFKyvFMEaxgOZCTIKb_swCeebWmq9SwBFfaRLlQ1KnflX9HE&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>BMX 25</Card.Title>
              <Card.Text>
                My bike is aviable from 9:30 till 16:00, there are no damagres
                to it and I pumped up the tires just yesterday.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            id="bike-card"
            className="d-flex flex-row align-self-end"
            style={{ height: "12rem", width: "25rem" }}
          >
            <Card.Img
              className="card-img-bottom"
              roundedCircle
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwlTBb3J3b0FJQvjpwEWPy4jvc0RPzFKyvFMEaxgOZCTIKb_swCeebWmq9SwBFfaRLlQ1KnflX9HE&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>BMX 25</Card.Title>
              <Card.Text>
                My bike is aviable from 9:30 till 16:00, there are no damagres
                to it and I pumped up the tires just yesterday.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card
            id="bike-card"
            className="d-flex flex-row align-self-end"
            style={{ height: "12rem", width: "25rem" }}
          >
            <Card.Img
              className="card-img-bottom"
              roundedCircle
              src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwlTBb3J3b0FJQvjpwEWPy4jvc0RPzFKyvFMEaxgOZCTIKb_swCeebWmq9SwBFfaRLlQ1KnflX9HE&usqp=CAc"
            />
            <Card.Body>
              <Card.Title>BMX 25</Card.Title>
              <Card.Text>
                My bike is aviable from 9:30 till 16:00, there are no damagres
                to it and I pumped up the tires just yesterday.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Cards;
