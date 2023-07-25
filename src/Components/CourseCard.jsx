import React from "react";


const CourseCard = ({cover_image, title}) => {
    return (
        <div className="col see-all-col">
            <div className="see-all-card">

                <img src={cover_image} alt={title} className="card-img-top see-all-card-img" />
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



 