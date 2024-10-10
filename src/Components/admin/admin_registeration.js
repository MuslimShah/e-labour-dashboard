import { Modal } from "react-bootstrap";
import Button from "../Button/button";
import InputField from "../FormFields/input_field";
import { useSelector } from "react-redux";
import { useAddNewAdminMutation } from "../../features/Admin_Api_Slice";
import { toast } from "react-toastify";
import { useState } from "react";

function AdminRegisteration({ showModal, handleCloseModal, onRefetch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const [addNewAdmin, { isLoading }] = useAddNewAdminMutation(token);

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
    if (!name.trim().length || !email.trim().length || !image) {
      toast.error("Category title and Per houre rate is required.");
      return;
    }

    console.log(password);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("contact", contact);
    formData.append("image", image);

    try {
      const response = await addNewAdmin({
        data: formData,
        token,
      }).unwrap();
      toast.success(response?.message || "Admin created successfully.");

      setEmail("");
      setName("");
      setPassword("");
      setImage(null);
      handleCloseModal();
      onRefetch();
    } catch (err) {
      console.log(err);
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
          Create Admin
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
          <InputField
            type="password"
            value={password}
            label="Password"
            name="password"
            placeholder="Write Your password"
            col_size="12"
            className="form-control form-control-lg"
            onChange={(e) => setPassword(e.target.value)}
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
              name={isLoading ? "Please wait" : "Add"}
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

export default AdminRegisteration;
