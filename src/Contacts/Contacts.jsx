import React from 'react'
import  './Contacts.css'

export default function Contacts() {
  return (
    <div>
      
    <div className="footer container">
      <div className="row">
        {/* first colomn*/}
        <div className=" col-md-4 my-5 mx-3">
          <div className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="text-center text-sm-start mb-4 mb-sm-0">
              <img
                src="src/assets/imges/nav/logo.png"
                alt="footer logo"
                className="img-fluid mb-3"
                style={{ maxWidth: "200px" }}
              />

              {/* Location */}
              <div className="d-flex align-items-center mb-3 text-white">
                <img src="src/assets/imges/footer/location.png" alt="location" style={{ width: "24px" }} />
                <small className="mx-2">
                  25566 Hc 1,Glenallen,<br />Alaska, 99588, USA
                </small>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-center mb-3 text-white">
                <img src="src/assets/imges/footer/call.png" alt="phone number" style={{ width: "24px" }} />
                <small className="mx-2">+603 4784 273 12</small>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mb-3 text-white">
                <img src="src/assets/imges/footer/sms.png" alt="email" style={{ width: "24px" }} />
                <small className="mx-2">rentcars@gmail.com</small>
              </div>
            </div>

            <div className="text-white mt-3 mt-sm-0">
              <div className="h6 text-capitalize mb-4">our products</div>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link text-white" href="#">Carrers</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Cars</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Packages</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Priceline</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* scenond colomn*/}
        <div className="col-12 col-md-7 my-md-5 mb-5">
          <div className="row">
            {/* about */}
            <div className="col-6 col-sm-4 text-white mb-4">
              <div className="h6 text-capitalize mb-4">about rent cars</div>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link text-white" href="#">Why choose us</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Our story</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Investor relations</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Press center</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Advertise</a></li>
              </ul>
            </div>

            {/* resources */}
            <div className="col-6 col-sm-4 text-white mb-4">
              <div className="h6 text-capitalize mb-4">resources</div>
              <ul className="nav flex-column">
                <li className="nav-item"><a className="nav-link text-white" href="#">Download</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Help center</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Guides</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Partner network</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Cruises</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#">Developer</a></li>
              </ul>
            </div>

            {/* follow us */}
            <div className="col-12 col-sm-4 text-white">
              <div className="h6 text-capitalize mb-4">follow us</div>
              <div className="d-flex gap-3 flex-wrap">
                <img src="src/assets/imges/footer/facebook.png" alt="facebook" style={{ width: "24px" }} />
                <img src="src/assets/imges/footer/youtube.png" alt="twitter" style={{ width: "24px" }} />
                <img src="src/assets/imges/footer/instagram.png" alt="instagram" style={{ width: "24px" }} />
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
