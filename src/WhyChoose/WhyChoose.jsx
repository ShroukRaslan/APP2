import React from 'react'


export default function WhyChoose() {
  return (
    <div>
      
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src="src/assets/imges/landing-page/sec-5/Audi 1.png"
              alt="Car"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">
              We Offer The Best Experience With Our <br />
              <span className="text-primary">Rental Deals</span>
            </h3>

            {/* Feature 1 */}
            <div className="d-flex align-items-start mb-4">
              <div className="bg-primary-subtle p-3 rounded me-3">
                <i className="bi bi-person-fill text-primary fs-4"></i>
              </div>
              <div>
                <h5 className="fw-bold">Best price guaranteed</h5>
                <p className="text-muted mb-0">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="d-flex align-items-start mb-4">
              <div className="bg-primary-subtle p-3 rounded me-3">
                <i className="bi bi-clock-fill text-primary fs-4"></i>
              </div>
              <div>
                <h5 className="fw-bold">24 hour car delivery</h5>
                <p className="text-muted mb-0">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="d-flex align-items-start mb-4">
              <div className="bg-primary-subtle p-3 rounded me-3">
                <i className="bi bi-calendar2-week-fill text-primary fs-4"></i>
              </div>
              <div>
                <h5 className="fw-bold">Best price guaranteed</h5>
                <p className="text-muted mb-0">
                  Find a lower price? We’ll refund you 100% of the difference.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="d-flex align-items-start">
              <div className="bg-primary-subtle p-3 rounded me-3">
                <i className="bi bi-headset text-primary fs-4"></i>
              </div>
              <div>
                <h5 className="fw-bold">24/7 technical support</h5>
                <p className="text-muted mb-0">
                  Have a question? Contact Rentcars support any time when you have a problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
