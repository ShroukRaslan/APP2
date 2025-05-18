import React from 'react'

export default function RentCarApp() {
  return (
  
      
    <div className="container py-5">
      <div className="row align-items-center">
    
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2>
            <strong>Download Rentcars App</strong> for{' '}
            <span className="text-primary">FREE</span>
          </h2>
          <p className="text-muted">
            For faster, easier booking and exclusive deals.
          </p>

          <div className="mb-3">
            <img
              src="hsrc/assets/imges/landing-page/andriod.png"
              alt="Google Play"
              style={{ height: '40px', marginRight: '10px' }}
            />
            <img
              src="src/assets/imges/landing-page/ios.png"
              alt="App Store"
              style={{ height: '40px' }}
            />
          </div>

       
          <form>
            <input
              type="text"
              className="form-control mb-3 rounded-pill bg-lightblue"
              placeholder="Name"
            />
            <input
              type="tel"
              className="form-control mb-3 rounded-pill bg-lightblue"
              placeholder="Phone Number"
            />
            <input
              type="email"
              className="form-control mb-3 rounded-pill bg-lightblue"
              placeholder="Email"
            />
            <button className="btn btn-primary rounded-pill px-4" type="submit">
              Submit
            </button>
          </form>
        </div>

      
        <div className="col-lg-6 text-center d-md-block d-none">
          <img
            src="src/assets/imges/landing-page/sec-7/iPhone-14.png" 
            alt="App Preview"
            className="img-fluid"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>
    </div>
  )
}
