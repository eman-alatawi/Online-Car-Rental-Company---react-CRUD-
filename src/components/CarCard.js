import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function CarCard(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <div className="img-container">
          <Card.Img variant="top" src={props.car.carUrl} className="img" />
        </div>
        <Card.Body>
          <Card.Title>
            {props.car.modelName} {props.car.manufactureYear}
          </Card.Title>
          <Card.Text>{props.car.brandName}</Card.Text>
          <Card.Text>${props.car.price}</Card.Text>
        </Card.Body>
        <Button
          variant="primary"
          onClick={() => props.showEditForm(props.car.id)}
        >
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={() => props.deleteHandler(props.car.id)}
        >
          Delete
        </Button>
      </Card>
    </div>
  );
}
