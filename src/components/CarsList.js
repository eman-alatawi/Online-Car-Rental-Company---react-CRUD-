import React, { useState, useContext } from "react";
import CarCard from "./CarCard";
import Container from "react-bootstrap/Container";
import { CarContext } from "./CarContext";
import EditCar from "./EditCar";

export default function CarsList() {
  const [cars, setCars] = useContext(CarContext);
  const [showEdit, toggleEdit] = useState(false);
  const [selectedCarID, setSelectedCarID] = useState(null);
  const [selectedCar, setSelectedCar] = useState({});
  console.log(cars);

  const showEditForm = (id) => {
    setSelectedCarID(id);
    const carToEdit = cars.find((car) => car.id === id);
    // console.log(carToEdit);
    setSelectedCar(carToEdit);
    // console.log(selectedCar);
    toggleEdit(true);
  };

  const deleteHandler = (id) => {
    const carsList = cars.filter((car) => car.id !== id);
    setCars(carsList);
  };

  return (
    <>
      <Container fluid className="carsList">
        {!showEdit && (
          <>
            {cars.map((car, i) => (
              <CarCard
                key={car.id}
                car={car}
                showEditForm={showEditForm}
                deleteHandler={deleteHandler}
              />
            ))}
          </>
        )}
      </Container>

      <div>
        {showEdit && selectedCarID && selectedCar && (
          <EditCar car={selectedCar} toggleEdit={toggleEdit} />
        )}
      </div>
    </>
  );
}
