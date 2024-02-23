const Input = ({ name, id }) => {
  return (
    <label htmlFor={id} className="sidebar-label">
      <input type="radio" name="test" id={id} />
      <span className="checkmark"></span>
      {name}
    </label>
  );
};

export default Input;
