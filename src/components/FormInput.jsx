const FormInput = ({ label, name, type, defaultValue }) => {
  console.log(type);
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        className="input input-bordered"
      />
    </div>
  );
};
export default FormInput;
