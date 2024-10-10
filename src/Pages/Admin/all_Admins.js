import React, { useState } from "react";
import Button from "../../Components/Button/button";
import AdminRegisteration from "../../Components/admin/admin_registeration";
import { useSelector } from "react-redux";
import { useGetAllAdminQuery } from "../../features/Admin_Api_Slice";
import ErrorMessage from "../../Components/ui/ErrorMessage";
import AdminItem from "./AdminItem";
import Loading from "../../Components/ui/Loading";

function AllAdmins() {
  const { token } = useSelector((state) => state.auth);
  const { data, isLoading, error, refetch } = useGetAllAdminQuery(token);
  const [showCreateModal, setshowCreateModal] = useState(false);
  const handleshowCreateModal = () => setshowCreateModal(true);
  const handleCloseCreateModal = () => setshowCreateModal(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card">
      <div className="card-header card-custom d-flex justify-content-between">
        <div>
          <h3>All Admin</h3>
        </div>
        <div className="d-flex justify-content-between">
          <Button
            name="Create-Admin"
            type="button"
            onClick={handleshowCreateModal}
            color="primary"
          />

          <AdminRegisteration
            showModal={showCreateModal}
            handleCloseModal={handleCloseCreateModal}
            onRefetch={refetch}
          />
        </div>
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
              {error ? (
                <ErrorMessage message={error?.data?.msg} />
              ) : (
                <table id="order-listing" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.admins.map((admin, index) => (
                      <AdminItem
                        key={admin._id}
                        {...admin}
                        token={token}
                        index={index}
                        onRefetch={refetch}
                      />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAdmins;
