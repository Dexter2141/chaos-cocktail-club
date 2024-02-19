import { ICocktail } from "../models/interfaces";
import CocktailCard from "./cocktailCard";
import "../styles/style.css";

function CocktailCardList({ cocktails }: { cocktails: ICocktail[] }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cocktails &&
        cocktails.map((cocktail, index) => (
          <div key={index} className="col">
            <CocktailCard {...cocktail} />
          </div>
        ))}
    </div>
  );
}
export default CocktailCardList;
