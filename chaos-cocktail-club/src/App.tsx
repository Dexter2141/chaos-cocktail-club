//import "./App.css";
import "./styles/style.css";
import CocktailCardList from "./components/cocktailCardList";
import { useData } from "./provider/DataContext";
import { ICocktail } from "./models/interfaces";
import { searchQueryOut } from "./components/navigationBar";

function App() {
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
  const sortedCocktails = [...cocktails].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <h1 className="news-header">Cocktails</h1>
      <CocktailCardList cocktails={sortedCocktails} />
    </div>
  );
}

export default App;
