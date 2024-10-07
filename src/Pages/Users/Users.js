import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../Components/Button/button";
import Create_User from "../../Components/Users/add_user";
import Edit_User from "../../Components/Users/edit_user";

function Users() {
  const [showCreateModal, setshowCreateModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleshowCreateModal = () => setshowCreateModal(true);
  const handleCloseCreateModal = () => setshowCreateModal(false);
  const handleshowEditModal = () => setshowEditModal(true);
  const handleCloseEditModal = () => setshowEditModal(false);
  return (
    <div className="card">
      <div className="card-header card-custom d-flex justify-content-between">
        <h3>All Users</h3>

        <Button
          name="Create-User"
          type="button"
          onClick={handleshowCreateModal}
          color="primary"
        />

        <Create_User
          showCreateModal={showCreateModal}
          handleCloseCreateModal={handleCloseCreateModal}
        />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  id="navbar-search-input"
                  placeholder="Search now"
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
              <table id="order-listing" className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="action-btn" onClick={""}>
                          Activate
                        </div>

                        <div className="trash-btn ">
                          <FaTrash /> <span className="ml-2">DELETE</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
