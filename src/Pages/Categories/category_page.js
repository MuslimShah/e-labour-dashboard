import React, { useState } from "react";
import { useSelector } from "react-redux";

import Button from "../../Components/Button/button";
import CreateForm from "../../Components/categoriesModal/create_form";
import { useGetAllCategoriesQuery } from "../../features/Admin_Api_Slice";
import Loading from "../../Components/ui/Loading";
import ErrorMessage from "../../Components/ui/ErrorMessage";
import CategoryItem from "./CategoryItem";

function CategoryPage() {
  const [showCreateModal, setshowCreateModal] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { data, error, isLoading, refetch } = useGetAllCategoriesQuery(token);

  const handleshowCreateModal = () => setshowCreateModal(true);
  const handleCloseCreateModal = () => setshowCreateModal(false);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card">
      <div className="card-header card-custom d-flex justify-content-between">
        <h3>All Categories</h3>

        <Button
          name="Create-Category"
          type="button"
          onClick={handleshowCreateModal}
          color="primary"
        />

        <CreateForm
          showCreateModal={showCreateModal}
          handleCloseCreateModal={handleCloseCreateModal}
          onRefetch={refetch}
        />
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              {error ? (
                <ErrorMessage message={error?.data?.msg} />
              ) : (
                <table id="order-listing" className="table">
                  <thead>
                    <tr>
                      <th>S_N0</th>
                      <th>Category Name</th>
                      <th>Per Hour Rate</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.categories.map((category, index) => (
                      <CategoryItem
                        key={category._id}
                        {...category}
                        token={token}
                        onRefetch={refetch}
                        index={index + 1}
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

export default CategoryPage;
