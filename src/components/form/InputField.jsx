export const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className="mb-3">

      <label className="form-label">{label}</label>

      <div className="input-icon position-relative">

        <i className={`fa-regular ${icon} left-icon`}></i>

        <input
          type={type}
          className="form-control ps-5"
          placeholder={placeholder}
        />

      </div>

    </div>
  );
};