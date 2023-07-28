import React from "react";

const CourseCard = ({ cover_image, title, id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="col see-all-col">
      <div className="see-all-card">
        <img
          src={cover_image} // Make sure the cover_image is the correct URL for the image
          alt={title}
          className="card-img-top see-all-card-img"
        />
        <div className="see-all-card-body text-center text-sm font-bold">
          <p className="see-all-card-title">{title}</p>
          <div className="d-grid">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
