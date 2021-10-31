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
            
                  
                  
                  
          <div className="grid">
            <article className="card">
              <div className="card__data">
                <img
                  src="http://cdn.cnn.com/cnnnext/dam/assets/140430115517-06-comfort-foods.jpg"
                  alt=""
                />
                <div className="card__info">
                  <h2>{i.name}</h2>
                  <h3>{i.rating}</h3>
                  <div className="payement">
                    {i.payment.cash && i.payment.online
                      ? "cash/online"
                      : i.payment.cash
                      ? "cash"
                      : "online"}
                  </div>
                </div>
                <h3 className="card__price">{i.price}</h3>
                <button className="card__add">like</button>
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
            </article>
            <br />
          </div>
        ))}
    </>
  );
};

export default List;
