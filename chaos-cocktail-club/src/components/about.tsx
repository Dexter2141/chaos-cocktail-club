import "../styles/style.css";
import ImageBrand from "../images/brand.png";
import { Image } from "react-bootstrap";
function About() {
  return (
    <div>
      <h1 className="news-header">About</h1>

      <div className="card-detail">
        <div className="custom-card">
          <h2>About Us - Crafting Cocktails with Precision</h2>
          Meet the founders - Adrian, Birte, and Malte. We embarked on a journey
          to create a cocktail website to ensure that every sip from our home
          bar is nothing short of perfection. No more experiments, no more
          guesswork; just the right amount for our glasses every time. Welcome
          to our world of precise mixology!
        </div>
      </div>
      <div className="card-detail brand-logo">
        <Image src={ImageBrand} alt="brand" className="img-fluid" />
      </div>
    </div>
  );
}
export default About;
