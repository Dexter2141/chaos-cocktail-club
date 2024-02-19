import { Card } from "react-bootstrap";
import { ICocktail } from "../models/interfaces";
import "../styles/style.css";

function CocktailCard(cocktail: ICocktail) {
  return (
    <Card className="card h-100">
      <Card.Img
        variant="top"
        src={cocktail.imagePath}
        className="card-img img-fluid"
      />

      <Card.Body>
        <Card.Title>{cocktail.name}</Card.Title>
        <Card.Text>{cocktail.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <a href={`#${cocktail.id}`} className="card-link text-dark">
          Mix it!
        </a>
      </Card.Footer>
    </Card>
  );
}

export default CocktailCard;
