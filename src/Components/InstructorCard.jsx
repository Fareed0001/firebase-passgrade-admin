import React from "react";


const InstructorCard = ({ firstName, lastName, photo }) => {
    return (
        <div className="col see-all-col">
            <div className="see-all-card">

                <img src={photo} alt={`${firstName} ${lastName}`} className="card-img-top see-all-card-img" />
                <div className="see-all-card-body text-center text-sm font-bold">
                    <p className="see-all-card-title">{firstName} {lastName}</p>
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

export default InstructorCard;
