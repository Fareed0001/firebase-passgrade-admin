import React from "react";
import Image from "next/image"; // Import the next/image component

const CourseCard = ({ cover_image, title }) => {
  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        {/* Replace the <img> element with the <Image> component */}
        <Image
          src={cover_image}
          alt={title}
          className="card-img-top see-all-card-img"
          width={300} // Set the desired width
          height={400} // Set the desired height
        />
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">{title}</p>
          <div className="d-grid">
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
