import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import EditForm from "../../Components/categoriesModal/edit_form";

function CategoryItem({ name, perHourRate, index }) {
  const [showEditModal, setshowEditModal] = useState(false);
  const handleshowEditModal = () => setshowEditModal(true);
  const handleCloseEditModal = () => setshowEditModal(false);
  const deleteHandler = async (id) => {};

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{perHourRate}</td>
      <td>
        <div className="d-flex align-items-center justify-content-start">
          <div className="action-btn" onClick={handleshowEditModal}>
            <FaEdit /> <span className="ml-2">VIEW</span>
          </div>
          <EditForm
            showEditModal={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
          />
          <div className="trash-btn" onClick={deleteHandler}>
            <FaTrash /> <span className="ml-2">DELETE</span>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default CategoryItem;
