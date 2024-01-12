import "./App.css";
import "./styles/style.css";
import CocktailCard from "./components/cocktailCard";
import { useData } from "./provider/DataContext";
import { ICocktail } from "./models/interfaces";

function App() {
  // get cocktail data stored in cocktails.json
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

  return (
    <div>
      <h1 className="news-header">Cocktails</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cocktails &&
          cocktails.map((cocktail, index) => (
            <div key={index} className="col">
              <CocktailCard {...cocktail} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
