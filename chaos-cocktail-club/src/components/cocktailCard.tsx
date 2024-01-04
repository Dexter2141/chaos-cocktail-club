import React from "react";
import { Card, Button } from "react-bootstrap";
import { ICocktail } from "../models/interfaces";

function CocktailCard(cocktail: ICocktail) {
  return (
    <Card style={{ width: "18 rem" }}>
      <Card.Img variant="top" src={cocktail.imagePath} />
      <Card.Body>
        <Card.Title>{cocktail.name}</Card.Title>
        <Card.Text>{cocktail.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CocktailCard;
