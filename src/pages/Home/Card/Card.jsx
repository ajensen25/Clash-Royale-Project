import "./Card.css";

function Card({ cardImage, style }) {
  return (
    <div className={style}>
      <img src={cardImage} alt="Lumberjack" />
    </div>
  );
}

export default Card;
