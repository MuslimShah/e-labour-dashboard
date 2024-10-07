import React from "react";

function Img_Field({ name, title }) {
  return (
    <>
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{title}</h4>
            <div class="file-upload-wrapper">
              <div id="fileuploader">{name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Img_Field;
