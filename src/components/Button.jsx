let Button = ({ setPay, setPrice, setRate }) => {
  return (
    <div>
      Price Sorting -{/* <Button x={setPrice} y={"lth"} m={"low to high"} /> */}
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
      <button
        onClick={() => {
          setRate("");
        }}
      >
        all
      </button>
      <br />
      <br />
      payment filter -:
      <button
        onClick={() => {
          setPay("cash");
        }}
      >
        cash
      </button>
      <button
        onClick={() => {
          setPay("online");
        }}
      >
        online
      </button>
      <button
        onClick={() => {
          setPay("all");
        }}
      >
        all
      </button>
    </div>
  );
};

export default Button;
