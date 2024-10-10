import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import EditForm from "../../Components/categoriesModal/edit_form";
import { useDeleteCategoryMutation } from "../../features/Admin_Api_Slice";

function CategoryItem({
  _id,
  name,
  image,
  perHourRate,
  index,
  token,
  onRefetch,
}) {
  const [showEditModal, setshowEditModal] = useState(false);
  const handleshowEditModal = () => setshowEditModal(true);
  const handleCloseEditModal = () => setshowEditModal(false);
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();

  const deleteHandler = async (id) => {
    if (!window.confirm("Are you sure do you want to delete this Category."))
      return;
    try {
      const response = await deleteCategory({
        token,
        id: id,
      }).unwrap();

      toast.success(response?.message || "Category deleted successfully.");
      onRefetch();
    } catch (err) {
      toast.error(err?.data?.msg || "Something went wrong.");
    }
  };

  return (
    <tr>
      <td>{index}</td>
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
      <td>{perHourRate}</td>
      <td>
        <div className="d-flex align-items-center justify-content-start">
          <div className="action-btn" onClick={handleshowEditModal}>
            <FaEdit /> <span className="ml-2">VIEW</span>
          </div>
          <EditForm
            category={{ name, perHourRate, image, _id }}
            token={token}
            onRefetch={onRefetch}
            showEditModal={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
          />
          <div className="trash-btn" onClick={() => deleteHandler(_id)}>
            <FaTrash />{" "}
            <span className="ml-2">
              {isLoading ? "Please wait." : "DELETE"}
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default CategoryItem;
