import "./Home.css";
import Card from "./Card/Card";
import lumberjack from "../../assets/lumberjack.webp";
import minions from "../../assets/minions.webp";
import threemusketeers from "../../assets/threemusketeers.webp";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <h1>Clash Royale Information</h1>
        <p>
          Get information such as damage, health, and more on all your favorite{" "}
          <b className="red">Clash Royale</b> cards! Click the button below to
          begin searching!
        </p>
        <Link to="/search">
          <button>Search</button>
        </Link>
        <div className="cards-container">
          <Card cardImage={lumberjack} style={"lumberjack"}></Card>
          <Card cardImage={minions} style={"minions"}></Card>
          <Card cardImage={threemusketeers} style={"threemusketeers"}></Card>
        </div>
      </div>
    </>
  );
}

export default Home;
