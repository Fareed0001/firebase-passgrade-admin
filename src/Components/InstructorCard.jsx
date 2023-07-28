import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";

const InstructorCard = ({ firstName, lastName, photo, onDelete, id }) => {
  const HandleDelete = (id) => {
    onDelete(id);
  };
  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        <img
          src={photo}
          alt={`${firstName} ${lastName}`}
          className="card-img-top see-all-card-img"
        />
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">
            {firstName} {lastName}
          </p>
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

export default InstructorCard;
