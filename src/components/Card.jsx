import { useState } from "react";
import data from "./db";
import List from "./List";

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
      <List data={data} price={price} rate={rate} />
    </div>
  );
};

export default Card;
