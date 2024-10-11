import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import {
  useActivateUserAccountMutation,
  useDeActivateUserAccountMutation,
  useDeleteUserMutation,
} from "../../features/User_Api_Slice";

const UserItem = ({
  index,
  name,
  email,
  activated,
  imageSrc,
  _id,
  token,
  onRefetch,
}) => {
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const [activateAccount, { isLoading: activateLoading }] =
    useActivateUserAccountMutation();
  const [deActivateAccount, { isLoading: deActivateLoading }] =
    useDeActivateUserAccountMutation();

  const deleteUserHandler = async (id) => {
    if (!window.confirm("Are you sure do you want to delete this User."))
      return;
    try {
      const response = await deleteUser({
        token,
        id: id,
      }).unwrap();

      toast.success(response?.message || "User deleted successfully.");
      onRefetch();
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  const activateAccountHadnler = async (id) => {
    try {
      const response = await activateAccount({
        token,
        id: id,
      }).unwrap();
      toast.success(response?.msg || "User Account Acitivated successfully.");
      onRefetch();
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  const deActivateAccountHadnler = async (id) => {
    try {
      const response = await deActivateAccount({
        token,
        id: id,
      }).unwrap();
      toast.success(response?.msg || "User Accout Deativated successfully.");
      onRefetch();
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>

      <td>
        <div className="d-flex align-items-center">
          {/* Avatar Image */}
          <img
            src={imageSrc} // Profile image source passed as prop
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
      <td>{activated ? "Activated" : "DeActivated"}</td>
      <td>
        <div className="d-flex align-items-center justify-content-start">
          {activated ? (
            <div
              className="action-btn"
              onClick={() => deActivateAccountHadnler(_id)}
            >
              {deActivateLoading ? "Please wait" : "De Activate"}
            </div>
          ) : (
            <div
              className="action-btn"
              onClick={() => activateAccountHadnler(_id)}
            >
              {activateLoading ? "Please wait" : "Activate"}
            </div>
          )}

          <div className="trash-btn " onClick={() => deleteUserHandler(_id)}>
            <FaTrash />
            <span className="ml-2">{isLoading ? "Please wait" : "DELETE"}</span>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
