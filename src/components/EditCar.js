import React, { useState, useContext } from "react";
import { CarContext } from "./CarContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { withRouter } from "react-router-dom";

function EditCar(props) {
  const [car, setCar] = useState(props.car);

  const [cars, setCars] = useContext(CarContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({
      ...car,
      [name]: value,
    });

    console.log(car);
  };

  const validate = () => {
    const modelName = document.getElementById("modelName").value;
    const brandName = document.getElementById("brandName").value;
    const manufactureYear = document.getElementById("manufactureYear").value;
    const price = document.getElementById("price").value;
    const carUrl = document.getElementById("carUrl").value;

    if (!modelName || !brandName || !manufactureYear || !price || !carUrl) {
      swal("Empty!!", "Some Feilds are empty!", "error");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (JSON.stringify(car) === "{}") {
      swal("Oops!", "You should add the car details first ", "warning");
    } else {
      if (validate()) {
        const filterdCars = cars.filter(
          (filterdCar) => filterdCar.id !== car.id
        );

        setCars([car, ...filterdCars]);
        console.log(cars);
        props.toggleEdit(false);
        swal(
          "Car Edited!",
          "Congratulations your car has been Edited successfully ",
          "success"
        );
      }
    }
  };
  return (
    <Container className="form-container">
      <Form onSubmit={handleSubmit}>
      <h3 className="mb-3">Edit Car Form</h3>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Model Name{" "}
          </Form.Label>
          <Col sm="8">
            {" "}
            <Form.Control
              id="modelName"
              name="modelName"
              type="text"
              value={car.modelName}
              placeholder="Enter Model Name"
              onChange={handleChange}
            />{" "}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Brand Name
          </Form.Label>
          <Col sm="8">
            {" "}
            <Form.Control
              id="brandName"
              name="brandName"
              type="text"
              value={car.brandName}
              placeholder="Enter Brand Name"
              onChange={handleChange}
            />{" "}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Manufacture Year
          </Form.Label>
          <Col sm="8">
            {" "}
            <Form.Control
              id="manufactureYear"
              name="manufactureYear"
              type="text"
              value={car.manufactureYear}
              placeholder="Enter Manufacture Year"
              onChange={handleChange}
            />{" "}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            price
          </Form.Label>
          <Col sm="8">
            {" "}
            <Form.Control
              id="price"
              name="price"
              type="number"
              value={car.price}
              placeholder="Enter the price"
              onChange={handleChange}
            />{" "}
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="4">
            Image Url{" "}
          </Form.Label>
          <Col sm="8">
            {" "}
            <Form.Control
              id="carUrl"
              name="carUrl"
              type="url"
              value={car.carUrl}
              placeholder="Enter the Car Image Url"
              onChange={handleChange}
            />{" "}
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 me-3">
          Edit Car
        </Button>
        <Button variant="secondary" onClick={() => props.toggleEdit(false)} className="mt-3">
          Cancel
        </Button>
      </Form>
      <img src={car.carUrl ? car.carUrl : 'https://www.freeiconspng.com/thumbs/car-icon-png/vehicle-icon-png-car-sedan-4.png' } width="300" height="200"/>
    </Container>
  );
}

export default withRouter(EditCar);
