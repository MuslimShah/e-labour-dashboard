import React, { useEffect } from "react";
import $ from "jquery"; // Ensure jQuery is available
import "dropify/dist/js/dropify.min.js"; // Import Dropify JavaScript
import "dropify/dist/css/dropify.min.css"; // Import Dropify CSS

function Selected_Image({ col_size, label, onChange, error, touched }) {
  return (
    <div className={`col-md-${col_size}`}>
      <div className="form-group row">
        <div className="col-sm-12">
          <label htmlFor="exampleFormControlTextarea1">{label}</label>
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <input
                  type="file"
                  className="dropify"
                  style={{ width: "100%", maxHeight: "100px" }} // Adjust height and width here
                  onChange={onChange} // Bind to Formik's onChange
                />
                {/* Show validation error if exists */}
                {error && touched && (
                  <div className="text-danger mt-2">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selected_Image;
