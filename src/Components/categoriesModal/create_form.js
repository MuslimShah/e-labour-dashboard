import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import InputField from "../FormFields/input_field";
import Button from "../Button/button";
import { useAddNewCategoryMutation } from "../../features/Admin_Api_Slice";

function CreateForm({ showCreateModal, handleCloseCreateModal, onRefetch }) {
  const [name, setName] = useState("");
  const [perHourRate, setPerHourRate] = useState("");
  const [image, setImage] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [createCategory, { isLoading }] = useAddNewCategoryMutation();

  // Handle image file change
  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setImage(file);
    } else {
      toast.error("Please select a valid image file (JPEG, PNG, JPG).");
      setImage(null);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!name.trim().length || !perHourRate.trim().length || !image) {
      toast.error("Category title and Per houre rate is required.");
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("perHourRate", perHourRate);
    formData.append("image", image);

    try {
      const response = await createCategory({ data: formData, token }).unwrap();
      console.log(response);

      // setName("");
      // setPerHourRate("");
      setImage(null);
      handleCloseCreateModal();
      onRefetch();
    } catch (err) {
      console.log(err);

      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };
  return (
    <Modal
      size="lg"
      show={showCreateModal}
      onHide={handleCloseCreateModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="modal-header-custome">
        <Modal.Title id="example-modal-sizes-title-lg">
          Create Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <form className="form-sample" onSubmit={onSubmitHandler}>
          <div className="row">
            <InputField
              label="Category title"
              type="text"
              name="title"
              placeholder="Write category name"
              value={name}
              col_size="6"
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Per hour rate"
              type="number"
              name="perHourRate"
              placeholder="Write Per hour rate"
              value={perHourRate}
              col_size="6"
              onChange={(e) => setPerHourRate(e.target.value)}
            />
            <div className="col-md-6">
              <label className="form-label">Image (JPEG, PNG, JPG)</label>
              <input
                type="file"
                className="form-control"
                accept="image/jpeg, image/png, image/jpg"
                onChange={onImageChange}
              />
            </div>

            <div className="col-md-12 d-flex justify-content-end">
              <Button
                name={isLoading ? "Please wait..." : "Add"}
                type="submit"
                color="primary"
                width="20%"
                disabled={isLoading}
              />
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateForm;
