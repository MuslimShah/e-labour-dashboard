import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import InputField from "../FormFields/input_field";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import Button from "../Button/button";
import { useUpdateAdminMutation } from "../../features/Admin_Api_Slice";

function EditAdmin({ showModal, handleCloseModal, onRefetch, admin }) {
  const [name, setName] = useState(admin.name || "");
  const [email, setEmail] = useState(admin.email || "");
  const [contact, setContact] = useState(admin.contact || "");
  const [image, setImage] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [updateAdmin, { isLoading }] = useUpdateAdminMutation(token);

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

  useEffect(() => {
    setName(admin.name);
    setEmail(admin.email);
    setContact(admin.contact);
  }, [admin]);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!name.trim().length || !email.trim().length || !contact.trim().length) {
      toast.error("Admin name, email, and contact no is required.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("image", image);

    try {
      const response = await updateAdmin({
        data: formData,
        token,
        id: admin._id,
      }).unwrap();

      setEmail("");
      setName("");
      setImage(null);
      setContact("");
      handleCloseModal();
      onRefetch();
      toast.success(response?.msg || "Admin updated successfully.");
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={handleCloseModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton className="modal-header-custome">
        <Modal.Title id="example-modal-sizes-title-lg">
          Update Admin Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="Applicant-Service-body"
        style={{ paddingTop: "1rem" }}
      >
        <form className="pt-3" onSubmit={onSubmitHandler}>
          <InputField
            type="text"
            value={name}
            label="Name"
            name="name"
            placeholder="Write Your name"
            col_size="12"
            className="form-control form-control-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <InputField
            type="email"
            value={email}
            label="Email"
            name="email"
            placeholder="Write Your Email"
            col_size="12"
            className="form-control form-control-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="text"
            value={contact}
            label="Contact"
            name="contact"
            placeholder="Write Your password"
            col_size="12"
            className="form-control form-control-lg"
            onChange={(e) => setContact(e.target.value)}
          />

          <div className="col-md-6">
            <label className="form-label">Profile Image (JPEG, PNG, JPG)</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg, image/png, image/jpg"
              onChange={onImageChange}
            />
          </div>

          <div className="col-md-12 d-flex justify-content-end">
            <Button
              name={isLoading ? "Please wait.." : "Update"}
              type="submit"
              color="primary"
              width="20%"
              disabled={isLoading}
            />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditAdmin;
