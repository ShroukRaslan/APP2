import React from 'react'

export default function HowWork() {
  return (
   <>
    <div className="container text-center py-5">
      <button className="btn btn-outline-primary mb-4 button" disabled>
        HOW IT WORK
      </button>
      <h2 className="mb-5 fw-bold">
        Rent With Following <span className="text-primary">3 Working Steps</span>
      </h2>
      <div className="row justify-content-center">
        {/* Step 1 */}
        <div className="col-12 col-md-6 mb-4">
          <div className="p-3">
            <div className="bg-light rounded-circle d-inline-block p-4 mb-3">
              <i className="bi bi-car-front-fill text-primary fs-1"></i>
            </div>
            <h5 className="fw-bold">Choose location</h5>
            <p className="text-muted">Choose your and find your best car</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3">
            <div className="bg-light rounded-circle d-inline-block p-4 mb-3">
              <i className="bi bi-calendar-check-fill text-primary fs-1"></i>
            </div>
            <h5 className="fw-bold">Pick-up date</h5>
            <p className="text-muted">Select your pick up date and time to book your car</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-12 col-md-4 mb-4">
          <div className="p-3">
            <div className="bg-light rounded-circle d-inline-block p-4 mb-3">
              <i className="bi bi-car-front-fill text-primary fs-1"></i>
            </div>
            <h5 className="fw-bold">Book your car</h5>
            <p className="text-muted">Book your car and we will deliver it directly to you</p>
          </div>
      </div>
    </div>
  
    </div>
   <div className="row justify-content-center">
      <div className="col-md-4">
        <img src='src/assets/imges/landing-page/volvo.png'/>
      </div>
      <div className='col-md-4'>
        <img src='src/assets/imges/landing-page/audi.png'/>
      </div>
      <div className='col-md-4'>
        <img src='src/assets/imges/card/d8wxke_2_.png'/>
      </div>
      </div>
      </>
  )
}
