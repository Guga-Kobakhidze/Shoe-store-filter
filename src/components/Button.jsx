const Button = ({ name, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      value={name === "All Products" ? "" : name}
      className="btns"
    >
      {name}
    </button>
  );
};

export default Button;
