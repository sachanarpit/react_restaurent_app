let List = ({ data, price, rate }) => {
  return (
    <>
      {data
        .filter((d) => (rate === "" ? d : d.rating === rate))
        .sort((a, b) => {
          if (price === "lth") {
            return a.price - b.price;
          } else if (price === "htl") {
            return b.price - a.price;
          }
        })
        .map((i) => (
          <div>
            <div class="card">
              <div class="card__image">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="Salad"
                />
              </div>
              <div class="card__info">
                <div class="car__info--title">
                  <h3>{i.name}</h3>
                  <p>rating - {i.rating}</p>
                </div>
                <div class="card__info--price">
                  <p>price- {i.price}</p>
                </div>
              </div>
            </div>
            {/* <div>{i.name}</div>
              <div className="rating">rating : {i.rating}</div>
              <div>price : {i.price}</div>
              <div className="payement">
                {i.payment.cash && i.payment.online
                  ? "cash/online"
                  : i.payment.cash
                  ? "cash"
                  : "online"}
              </div> */}
            <br />
          </div>
        ))}
    </>
  );
};

export default List;
