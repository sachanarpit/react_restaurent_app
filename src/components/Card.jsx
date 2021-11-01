import { useState } from "react";
import Button from "./Button";

import data from "./db";
import List from "./List";

import "./style.css";
let Card = () => {
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [pay, setPay] = useState("");
  return (
    <div>
      <Button setPrice={setPrice} setRate={setRate} setPay={setPay} />
      <br />
      <List data={data} price={price} rate={rate} pay={pay} />
    </div>
  );
};

export default Card;
