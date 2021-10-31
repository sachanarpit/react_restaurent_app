let List = ({ data, price, rate }) => {
  return (
    <div>
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

export default List;
