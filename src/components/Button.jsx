let Button = ({ x, y, m }) => {
  return <button onClick={x(y)}>{m}</button>;
};

export default Button;
