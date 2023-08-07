import React from "react";

const Index = () => {
  return (
    <section className="addNewCourse">
      <div className="container-fluid dashboard-messages-body-content">
        <p className="dashboard-messages-header">Recieved messages</p>

        <div className="row row-cols-1 row-cols-md-2 g-4">

          {/* NORMAL MESSAGES HERE  */}
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h6 class="card-title">Message title</h6>
                <p class="card-text">
                  the message enters here the message enters here
                </p>
              </div>
            </div>
          </div>
          {/* NORMAL MESSAGES HERE  */}

        </div>
      </div>
    </section>
  );
};

export default Index;




