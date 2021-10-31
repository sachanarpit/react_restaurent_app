import { useState } from "react";
import data from "./db";

let Card = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  return (
    <div>
      Price Sorting -
      <button
        onClick={() => {
          setPrice("lth");
        }}
      >
        low to high
      </button>
      <button
        onClick={() => {
          setPrice("htl");
        }}
      >
        high to low
      </button>
      <br />
      rating filter -
      <button
        onClick={() => {
          setRate(1);
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          setRate(2);
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          setRate(3);
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setRate(4);
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          setRate(5);
        }}
      >
        5
      </button>
      {data
        .filter((d) => (rate === "" ? d : d.rating === rate))
        .sort((a, b) => {
          if (price === "lth") {
            return a.price - b.price;
          }
          if (price === "htl") {
            return b.price - a.price;
          }
        })
        .map((i) => (
          <div>
            <div>
              <div>{i.name}</div>
              <div className="rating">rating : {i.rating}</div>
              <div>price : {i.price}</div>
              <div className="payement">
                {i.payment.cash && i.payment.online
                  ? "cash/online"
                  : i.payment.cash
                  ? "cash"
                  : "online"}
              </div>
            </div>
            <br />
          </div>
        ))}
    </div>
  );
};

export default Card;
