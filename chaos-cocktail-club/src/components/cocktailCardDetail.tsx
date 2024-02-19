import { Card, CardFooter, ListGroup, ListGroupItem } from "react-bootstrap";
import { ICocktail } from "../models/interfaces";
import "../styles/style.css";
import { useParams } from "react-router-dom";
import { useData } from "../provider/DataContext";
import { useState } from "react";

function CocktailCardDetail() {
  const multiplicator: number[] = [1, 2, 3, 4];
  const [selectedNumber, setSelectedNumber] = useState<number>(1);

  const handleItemClick = (number: number) => {
    setSelectedNumber(number);
  };

  const { id } = useParams(); // id of the cocktail
  const { data } = useData(
    "http://localhost:3000/chaos-cocktail-club/cocktails.json"
  );

  if (!data) {
    return (
      <div id="loading">
        <button className="btn btn-dark" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading...</span>
        </button>
      </div>
    );
  }

  const cocktails: ICocktail[] = data;
  const cocktail = cocktails.find((c) => c.id === id);
  const imagePath = `${cocktail?.imagePath}`;

  return (
    <div className="card-detail">
      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={imagePath}
          className="card-img img-fluid"
          alt="cocktail image"
          // Adjust the width and height as needed
        />
        <Card.Body>
          <Card.Title>{cocktail?.name}</Card.Title>
          <Card.Text>{cocktail?.description}</Card.Text>
        </Card.Body>
        <div className="row">
          <div className="col-md-12 text-end">
            <div className="btn-group dropup">
              <button
                type="button"
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Amount: {selectedNumber}
              </button>
              <ul className="dropdown-menu">
                {multiplicator.map((number, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleItemClick(number)}
                    >
                      {`${number}`}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ListGroup className="list-group-flush">
          {cocktail?.ingredients?.map((ingredient, index) => (
            <ListGroupItem key={index}>{`${
              ingredient.quantity * selectedNumber
            } ${ingredient.unit} ${ingredient.name}`}</ListGroupItem>
          ))}
        </ListGroup>
        <CardFooter>
          <Card.Title>Instructions</Card.Title>
          <ol>
            {cocktail?.instructions?.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CocktailCardDetail;
