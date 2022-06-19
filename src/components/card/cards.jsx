import React from "react";
import "./card.css";
const Card = ({
  id = 0,
  image = "",
  title = "",
  description = "",
  price = "",
  rating = "",
  category = "",
  count = "",
  style = {},
  classname = "",
  onClick,
}) => {
  return (
    <>
      <div className={classname} style={style} onClick={() => onClick()}>
        <div className="Image" style={{ backgroundImage: `url(${image}` }}>
          <div className="rate">{rating}</div>
        </div>
        <p className="price">{`$${price}`}</p>
        <p className="title">{title}</p>
        <div className="info">
          <p className="des">{description}</p>
          <p className="count">{count}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
