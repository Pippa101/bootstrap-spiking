import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <Card className="bike-card" style={{ width: "18rem" }}>
      <Card.Img
        variant="bottom"
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwlTBb3J3b0FJQvjpwEWPy4jvc0RPzFKyvFMEaxgOZCTIKb_swCeebWmq9SwBFfaRLlQ1KnflX9HE&usqp=CAc"
      />
      <Card.Body>
        <Card.Title>BMX 25</Card.Title>
        <Card.Text>
          My bike is aviable from 9:30 till 16:00, there are no damagres to it
          and I pumped up the tires just yesterday.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
