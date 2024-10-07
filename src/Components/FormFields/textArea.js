import React from "react";

function TextArea({
  name,
  value,
  placeholder,
  label,
  errors,
  touched,
  onChange,
  onBlur,
}) {
  return (
    <div className="col-md-12">
      <label htmlFor="status" className="form-label">
        {label}
      </label>

      <textarea
        class="form-control"
        rows="6"
        id="remarks"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && touched ? <p class="form-error">{errors}</p> : null}
    </div>
  );
}

export default TextArea;
