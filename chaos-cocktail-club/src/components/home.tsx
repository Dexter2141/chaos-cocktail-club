import "../styles/style.css";
import { Card } from "react-bootstrap";
import BarEquipment from "../images/bar_equipment.jpg";
import CocktailOfMonth from "../images/gin_basil_smash.jpg";

function Home() {
  return (
    <div>
      <h1 className="news-header">Home</h1>

      <div id="home-text" className="custom-card">
        <h2>Welcome to Our Cocktail Oasis - Discover the Art of Mixology!</h2>
        Welcome to our virtual cocktail haven, where every glass is a canvas and
        every sip is a masterpiece waiting to be experienced. We invite you to
        embark on a journey through the captivating world of mixology, where
        creativity knows no bounds and every cocktail is a work of art.
      </div>
      <div className="card-detail">
        <div className="row row-cols-1 row-cols-md-1 g-4 custom-card">
          <Card>
            <div className="row g-0">
              <div className="col-md-4">
                <Card.Img
                  src={BarEquipment}
                  className="rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title> Brave Mixing: The Tools Matter</Card.Title>
                  <Card.Text>
                    Dive into mixology, where courage meets creativity. Equip
                    yourself with quality tools; they're the keys to unlocking
                    your cocktail masterpiece. Cheers to the fearless mixologist
                    within!
                  </Card.Text>
                  <Card.Text>
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
          <Card>
            <div className="row g-0">
              <div className="col-md-4">
                <Card.Img
                  src={CocktailOfMonth}
                  className="rounded-start"
                  alt="cocktail of the month"
                />
              </div>
              <div className="col-md-8">
                <Card.Body>
                  <Card.Title>
                    Gin Basil Smash: The "Green Hell" Delight
                  </Card.Title>
                  <Card.Text>
                    The Gin Basil Smash, nicknamed the "Green Hell," is an
                    exhilarating cocktail. With gin, lemon, and basil, it's a
                    herbal paradise in a glass. Taste the green!
                  </Card.Text>
                  <Card.Text>
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Home;
