import React from "react";

function Radio_Button({
  label,
  name,
  value,
  FirstRadioBtn,
  SecondRadioBtn,
  onBlur,
  onChange,
  errors,
  touched,
}) {
  return (
    <div className="col-md-6">
      <label className="form-label">
        <h5>{label}</h5>
      </label>
      <div
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="form-check" style={{ paddingLeft: "22px" }}>
          <input
            type="radio"
            id="Regular"
            name={name}
            className="form-check-input"
            value={FirstRadioBtn}
            checked={value === FirstRadioBtn}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label htmlFor="Regular" className="form-check-label">
            {FirstRadioBtn}
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="Private"
            name={name}
            className="form-check-input"
            value={SecondRadioBtn}
            checked={value === SecondRadioBtn}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label htmlFor="Private" className="form-check-label">
            {SecondRadioBtn}
          </label>
        </div>
      </div>
      {errors && touched ? <p className="form-error">{errors}</p> : null}
    </div>
  );
}

export default Radio_Button;
