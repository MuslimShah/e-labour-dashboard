import React from "react";
import { useSelector } from "react-redux";

import Loading from "../../Components/ui/Loading";
import ErrorMessage from "../../Components/ui/ErrorMessage";
import UserItem from "./UserItem";
import { useGetAllUserQuery } from "../../features/User_Api_Slice";

function Users() {
  const { token } = useSelector((state) => state.auth);
  const { data, isLoading, error, refetch } = useGetAllUserQuery(token);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card">
      <div className="card-header card-custom d-flex justify-content-between">
        <h3>All Users</h3>
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
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Account Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.users.map((user, index) => (
                      <UserItem
                        key={user._id}
                        index={index}
                        token={token}
                        onRefetch={refetch}
                        {...user}
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

export default Users;
