const Input = ({ handleChange, value, title, name, id }) => {
  return (
    <label htmlFor={id} className="sidebar-label">
      <input
        onChange={handleChange}
        type="radio"
        value={value}
        name={name}
        id={id}
      />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default Input;
