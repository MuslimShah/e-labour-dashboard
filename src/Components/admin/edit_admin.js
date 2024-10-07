import { Modal } from "react-bootstrap";
import Button from "../Button/button";
import InputField from "../FormFields/input_field";

function EditAdmin({ showModal, handleCloseModal }) {
  // const fileInputRef = useRef(null);

  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="modal-header-custome">
        <Modal.Title id="example-modal-sizes-title-lg">
          Create Admin
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <form className="pt-3">
          <InputField
            type="text"
            value=""
            label="Name"
            name="name"
            placeholder="Write Your name"
            col_size="12"
            className="form-control form-control-lg"
            onChange=""
            onBlur=""
            errors=""
            touched=""
          />
          <InputField
            type="email"
            value=""
            label="Email"
            name="email"
            placeholder="Write Your Email"
            col_size="12"
            className="form-control form-control-lg"
            onChange=""
            onBlur=""
            errors=""
            touched=""
          />
          <InputField
            type="password"
            value=""
            label="Password"
            name="password"
            placeholder="Write Your password"
            col_size="12"
            className="form-control form-control-lg"
            onChange=""
            onBlur=""
            errors=""
            touched=""
          />

          <div className="form-group">
            <label htmlFor="fileInput">Upload Image</label>
            <input
              id="fileInput"
              type="file"
              className="form-control form-control-lg"
              name="image"
              // onChange={(event) => {
              //   setFieldValue("image", event.target.files[0]);
              // }}
              // onBlur={handleBlur}
            />
          </div>

          <div className="col-md-12 d-flex justify-content-end">
            <Button
              name="Edit"
              type="Add Admin"
              color="primary"
              width="20%"
              disabled=""
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditAdmin;
