import { useParams } from "react-router-dom";
import { ICocktail } from "../models/interfaces";
import { useData } from "../provider/DataContext";
import "../styles/style.css";
import CocktailCardList from "./cocktailCardList";

function Category() {
  const { category } = useParams(); // category of cocktails
  const { data } = useData();

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
  const sortedCocktails = [...cocktails].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const cocktailsCategorized: ICocktail[] = sortedCocktails.filter(
    (c) => c.category === category
  );

  const categoryName = category === "ByChaosClub" ? "By CC" : category;

  return (
    <div>
      <h1 className="news-header">{categoryName}</h1>
      <CocktailCardList cocktails={cocktailsCategorized} />
    </div>
  );
}

export default Category;
