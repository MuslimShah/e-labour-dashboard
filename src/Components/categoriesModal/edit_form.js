
import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../Button/button";
import InputField from "../FormFields/input_field";

function EditForm({ showEditModal, handleCloseEditModal }) {
  return (
    <Modal
      size="lg"
      show={showEditModal}
      onHide={handleCloseEditModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="modal-header-custome">
        <Modal.Title id="example-modal-sizes-title-lg">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <form className="form-sample">
          <div className="row">
            <InputField
              label="Applicant Name"
              type="text"
              name="name"
              placeholder="Write your name"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Father Name"
              type="text"
              name="fatherName"
              placeholder="Write your father name"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Gender"
              type="text"
              name="gender"
              placeholder="Write your gender"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Domicile"
              type="text"
              name="domicile"
              placeholder="Write your domicile"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Nationality"
              type="text"
              name="nationality"
              placeholder="Write your Nationality"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Contact No"
              type="text"
              name="contact"
              placeholder="Write your Contact Number"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Cnic"
              type="text"
              name="cnic"
              placeholder="Write your Cnic"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <InputField
              label="Address"
              type="text"
              name="address"
              placeholder="Write your Address"
              value=""
              col_size="6"
              onChange=""
              onBlur=""
              errors=""
              touched=""
            />
            <div className="col-md-12 d-flex justify-content-end">
              <Button name="Edit" type="submit" color="primary" width="20%" />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditForm;
