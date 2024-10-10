import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditAdmin from "../../Components/admin/edit_admin";
import { toast } from "react-toastify";
import { useDelteAdminMutation } from "../../features/Admin_Api_Slice";

const AdminItem = ({
  index,
  name,
  email,
  _id,
  contact,
  image,
  onRefetch,
  token,
}) => {
  const [showEditModal, setshowEditModal] = useState(false);
  const handleshowEditModal = () => setshowEditModal(true);
  const handleCloseEditModal = () => setshowEditModal(false);
  const [deleteAdmin, { isLoading }] = useDelteAdminMutation();

  const deleteHandler = async (id) => {
    if (!window.confirm("Are you sure do you want to delete this admin."))
      return;
    try {
      const response = await deleteAdmin({
        token,
        id: id,
      }).unwrap();
      toast.success(response?.message || "Admin deleted successfully.");
      onRefetch();
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      {/* <td>{name}</td> */}
      <td>
        <div className="d-flex align-items-center">
          {/* Avatar Image */}
          <img
            src={image} // Profile image source passed as prop
            alt={`${name}'s profile`}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%", // Circular avatar style
              objectFit: "cover",
              marginRight: "10px",
            }}
          />
          {/* Displaying the Name next to the profile image */}
          <span>{name}</span>
        </div>
      </td>
      <td>{email}</td>
      <td>{contact}</td>
      <td>
        <div className="d-flex align-items-center justify-content-start">
          <div className="action-btn" onClick={handleshowEditModal}>
            <FaEdit /> <span className="ml-2">EDIT</span>
          </div>
          <EditAdmin
            admin={{ name, email, contact, _id }}
            showModal={showEditModal}
            handleCloseModal={handleCloseEditModal}
            onRefetch={onRefetch}
          />
          <div className="trash-btn " onClick={() => deleteHandler(_id)}>
            <FaTrash />{" "}
            <span className="ml-2">
              {isLoading ? "Please wait.." : "DELETE"}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default AdminItem;
