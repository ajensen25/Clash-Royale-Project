import { useEffect, useRef } from "react";
import "./Search.css";

function Search() {
  const URL = "https://api.clashroyale.com/v1/cards";

  const cardInput = useRef(null);

  const getCards = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_APP_ID}`,
        },
      });

      const cardData = await res.json();
    } catch (err) {
      console.error("Failed to access API", err);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <div className="search">
        <h2>Search for your card here:</h2>
        <div className="input-box">
          <input type="text" placeholder="Knight" ref={cardInput} />
          <button>
            <i className="uil uil-search"></i>
          </button>
        </div>
        <div className="card-info">
          <h2>Knight</h2>
          <div className="stats">
            <p>
              <b className="pink">Elixir Cost:</b> 3
            </p>
            <p>
              <b>Rarity:</b> <b className="rarity-color">Common</b>
            </p>
            <p>
              <b>Evolution:</b> Yes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
