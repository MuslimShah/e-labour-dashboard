import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

import Button from "../Button/button";
import InputField from "../FormFields/input_field";
import { useUpdateCategoryMutation } from "../../features/Admin_Api_Slice";

function EditForm({
  showEditModal,
  handleCloseEditModal,
  token,
  category,
  onRefetch,
}) {
  const [name, setName] = useState("");
  const [perHourRate, setPerHourRate] = useState("");
  const [image, setImage] = useState(null);
  const [updateCategory, { isLoading }] = useUpdateCategoryMutation();

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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("perHourRate", perHourRate);
    formData.append("image", image);

    try {
      const response = await updateCategory({
        data: formData,
        token,
        id: category._id,
      }).unwrap();

      setName("");
      setPerHourRate("");
      setImage(null);
      handleCloseEditModal();
      onRefetch();
      toast.success(response?.msg || "Category updated successfully.");
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  useEffect(() => {
    setName(category.name);
    setPerHourRate(category.perHourRate);
  }, [category]);

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
        <form className="form-sample" onSubmit={onSubmitHandler}>
          <div className="row">
            <InputField
              label="Category title"
              type="text"
              name="name"
              placeholder="Write category name"
              value={name}
              col_size="6"
              onChange={(e) => setName(e.target.value)}
            />
            <InputField
              label="Per Hour Rate"
              type="text"
              name="perHourRate"
              placeholder="Write Per hour rate"
              value={perHourRate}
              col_size="6"
              onChange={(e) => setPerHourRate(e.target.value)}
            />

            <div className="col-md-6">
              <label className="form-label">
                Category Cover Image (JPEG, PNG, JPG)
              </label>
              <input
                type="file"
                className="form-control"
                accept="image/jpeg, image/png, image/jpg"
                onChange={onImageChange}
              />
            </div>

            <div className="col-md-12 d-flex justify-content-end">
              <Button
                name={isLoading ? "Please wait" : "Edit"}
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

export default EditForm;
