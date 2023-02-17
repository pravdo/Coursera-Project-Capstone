import React from "react";

const Card = ({ item }) => {
  return (
    <>
      {item.imgUrl ? (
        <div>
          <img
            loading="lazy"
            src={`/icons_assets/${item.imgUrl}`}
            className="card-img"
            alt=""
          />
          <p className="plain-text">Title: {item.title}</p>
          <p className="plain-text">Price: ${item.price}</p>
          {/* <p className='plain-text'>Occasion: {item.occasion}</p> */}
        </div>
      ) : (
        <div>
          <p className="plain-text">Date: {item.date}</p>
          <p className="plain-text">Time: {item.time}</p>
          <p className="plain-text">Number of Guests: {item.number}</p>
          <p className="plain-text">Occasion: {item.occasion}</p>
        </div>
      )}
    </>
  );
};

export default Card;
