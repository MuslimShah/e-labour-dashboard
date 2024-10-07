import React from "react";
import Cards from "../../Components/Cards/cards";

function Dashboard() {
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="row">
            <div className="col-12 col-xl-5 mb-4 mb-xl-0">
              <h3 className="font-weight-bold">Hi, Muslim Shah Welcome back to!</h3>
              <h4 className="font-weight-normal mb-0">Admin Dashboard,</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <Cards
          title="Total Users"
          total="34040"
          percentage="2.00%"
          days="30 days"
          icon="ti-user"
        />
        <Cards
          title="Number of Clients"
          total="47033"
          percentage="0.22%"
          days="30 days"
          icon="ti-briefcase" // Briefcase icon for clients
        />
        <Cards
          title="Number of Service Providers"
          total="40016"
          percentage="10.00%"
          days="30 days"
          icon="ti-settings" // Hammer icon for service providers
        />
        <Cards
          title="Total Jobs Created"
          total="61344"
          percentage="22.00%"
          days="30 days"
          icon="ti-check-box"
        />
        <Cards
          title="Total Jobs Completed"
          total="61344"
          percentage="22.00%"
          days="30 days"
          icon="ti-check"
        />
        <Cards
          title="Number of Activated Accounts"
          total="61344"
          percentage="22.00%"
          days="30 days"
          icon="ti-check-box"
        />
        <Cards
          title="Number of Deactivated Accounts"
          total="61344"
          percentage="22.00%"
          days="30 days"
          icon="ti-close"
        />
        <Cards
          title="Number of Admins"
          total="10" // Replace with the actual number of admins
          percentage="0.00%" // Adjust percentage as necessary
          days="30 days"
          icon="ti-user" // User icon for admins
        />
      </div>
    </div>
  );
}

export default Dashboard;

