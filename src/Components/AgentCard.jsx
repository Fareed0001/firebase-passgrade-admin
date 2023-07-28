import React from "react";

const AgentCard = ({
  firstName,
  lastname,
  email,
  phone,
  company,
  photo,
  id,
  onDelete,
}) => {
  const HandleDelete = (id) => {
    onDelete(id);
  };
  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        <img
          src={photo}
          alt="Yet to update image"
          className="card-img-top see-all-card-img"
        />

        {/* you can comment out my tailwind styles */}
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">
            {firstName} {lastname}
          </p>
          <p className="see-all-card-title">{email}</p>
          <p className="see-all-card-title">{phone}</p>
          <p className="see-all-card-title">{company}</p>
          <div class="d-grid">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => {
                HandleDelete(id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
