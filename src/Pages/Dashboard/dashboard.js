import React from "react";

import Cards from "../../Components/Cards/cards";
import { useGetDashboardDataQuery } from "../../features/Admin_Api_Slice";
import Loading from "../../Components/ui/Loading";
import ErrorMessage from "../../Components/ui/ErrorMessage";
import { useSelector } from "react-redux";

function Dashboard() {
  const { token, userInfo } = useSelector((state) => state.auth);

  const { data, error, isLoading } = useGetDashboardDataQuery(token);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error?.data?.msg} />;
  }

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-5 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">
                Hi, {userInfo.name} Welcome back to!
              </h3>
              <h4 className="font-weight-normal mb-0">Admin Dashboard,</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Cards title="Total Users" total={data.totalUsers} icon="ti-user" />
        <Cards
          title="Number of Clients"
          total={data.clients}
          icon="ti-briefcase" // Briefcase icon for clients
        />
        <Cards
          title="Number of Service Providers"
          total={data.serviceProviders}
          icon="ti-settings" // Hammer icon for service providers
        />
        <Cards
          title="Total Jobs Created"
          total={data.totalJobs}
          icon="ti-check-box"
        />
        <Cards
          title="Total Jobs Completed"
          total={data.completedJobs}
          icon="ti-check"
        />
        <Cards
          title="Number of Activated Accounts"
          total={data.activatedAccounts}
          icon="ti-check-box"
        />
        <Cards
          title="Number of Deactivated Accounts"
          total={data.deactivatedAccounts}
          icon="ti-close"
        />
        <Cards
          title="Number of Admins"
          total={data.totalAdmins} // Replace with the actual number of admins
          icon="ti-user" // User icon for admins
        />
      </div>
    </div>
  );
}

export default Dashboard;
