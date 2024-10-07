import React from "react";

function Cards({ title, total, days, percentage, icon }) {
  return (
    <div class="col-md-3 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <p class="card-title text-md-center text-xl-left">{title}</p>
          <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">{total}</h3>
            <i class={`${icon} icon-md text-muted mb-0 mb-md-3 mb-xl-0`}></i>
          </div>
          <p class="mb-0 mt-2 text-warning">
            {percentage}
            <span class="text-black ml-1">
              <small>({days})</small>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
