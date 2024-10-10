import React from "react";

function InputField({
  label,
  value,
  type,
  name,
  placeholder,
  col_size,
  className,
  onChange,
  onBlur,
  errors,
  touched,
}) {
  return (
    <div className={`col-md-${col_size}`}>
      <div className="form-group row">
        <div className="col-sm-12">
          <label htmlFor={name}>{label}</label>
          <input
            type={type}
            name={name}
            className={className ? className : `form-control`}
            id={name}
            placeholder={placeholder ? placeholder : label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          {errors && touched ? <p className="form-error">{errors}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default InputField;
