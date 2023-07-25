import Image from "next/image";
import React from "react";

const StudentCard = (props) => {
  const { firstName, lastname, email, phonenumber } = props;
  return (
      <div className="col see-all-col">
        <div className="see-all-card">
          <Image
            className="card-img-top see-all-card-img"
            alt="Student is yet to upload an image"
          />

          {/* you can comment out my tailwind styles */}
          <div className="see-all-card-body text-center text-sm font-bold">
            <p className="see-all-card-title">{firstName} {lastname}</p>
            <p>{email}</p>
            <p>{phonenumber}</p>
            <div class="d-grid">
              <button type="button" class="btn btn-outline-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default StudentCard;
