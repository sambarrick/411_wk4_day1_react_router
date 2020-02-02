import React from "react";
import cars from "../cars.json";
// import material ui components here //
import { Container, Paper, Chip, Typography } from "@material-ui/core";

const Car = props=> {
  let id = props.match.params.id;
  let findCar = cars.find(car => id == car.id);
  return (
    <div className="car-container" key={props.match.params.id}>
      {console.log(id)}
      <Container className="car-container">
      <Paper className="car-paper">
        <Typography variant="h5">{findCar.Name}</Typography>
        <div className="chip-container">
        <Chip label={`id: ${findCar.id}`}></Chip>
        <Chip label={`Name: ${findCar.Name}`}></Chip>
        <Chip color="secondary" label={`Miles per gallon: ${findCar.Miles_per_Gallon}`}></Chip>
        <br />
        <Chip label={`Cylinders: ${findCar.Cylinders}`}></Chip>
        <Chip label={`Displacement: ${findCar.Displacement}`}></Chip>
        <Chip label={`Horsepower: ${findCar.Horsepower}`}></Chip>
        <br />
        <Chip label={`Weight (lbs): ${findCar.Weight_in_lbs}`}></Chip>
        <Chip label={`Acceleration: ${findCar.Acceleration}`}></Chip>
        <Chip label={`Year: ${findCar.Year}`}></Chip>
        <br />
        <Chip label={`Origin: ${findCar.Origin}`}></Chip>
        </div>
      </Paper>
      </Container>
    </div>
    //Look at json file to list car names and stuff.
    //Styling this without breaks is driving me nuts.
  )
};

export default Car;
