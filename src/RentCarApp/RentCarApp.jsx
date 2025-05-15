import React from 'react'

export default function RentCarApp() {
  return (
    <div>
      
    <div className="container">
      <div className="row justify-content-center text-center text-md-start">
        <div className=" col-md-7 ">
          <div className="my-md-5 mt-3 pt-md-5 bg-light p-4 rounded shadow">
            <h2>
              Download Rentcars App for <span className="text-primary">FREE</span>
            </h2>
            <small className="fs-5">
              For faster, easier booking and exclusive deals.
            </small>
            <div className="d-flex justify-content-center justify-content-md-start my-4 flex-wrap">
              <img
                src="src/assets/imges/landing-page/andriod.png"
                alt="android"
                className="mx-2 mb-2"
                style={{ width: "150px", maxWidth: "100%" }}
              />
              <img
                src="src/assets/imges/landing-page/ios.png"
                alt="ios"
                className="mx-2 mb-2"
                style={{ width: "150px", maxWidth: "100%" }}
              />
            </div>
            <form action="">
              <div className="input-group mb-3" style={{width: '360px'}}>
                <input type="text" className="form-control  _info_qgyuq_21 my-0" placeholder="Name"/>
                  </div>
                  <div className="input-group mb-3" style={{width: '360px'}}>
                    <input type="text" className="form-control _info_qgyuq_21 my-0" placeholder="Phone Number"/>
                      </div><div className="input-group mb-3" style={{width: '360px'}}>
                        <input type="text" className="form-control _info_qgyuq_21 my-0" placeholder="Email"/>
                          </div><div className="d-flex justify-content-center my-1" style={{width: '360px'}}>
                            <button className="btn btn-primary" type="submit">Submit</button></div>
            </form>
          </div>
          </div>
          <div className=" col-md-5 d-flex align-items-end d-md-block d-none mb-0">

            <img src="src/assets/imges/landing-page/sec-7/iPhone-14.png" 
            alt="iphone"
            style={{width: '70%'}}/>
             </div>
         
      </div>
    </div>
    </div>
  )
}
