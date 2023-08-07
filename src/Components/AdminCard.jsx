import React from "react";

const AdminCard = ({ firstName, lastName, email }) => {
  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        {/* you can comment out my tailwind styles */}
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">
            {firstName} {lastName}
          </p>
          <p className="see-all-card-title">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
