import React from 'react'
import axios from 'axios'; 
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AllCars() {
  let [cars, setCars] = useState([]);
  let getCars = async() =>{
    try {
      let response = await axios.get("https://myfakeapi.com/api/cars/")
      setCars(response?.data?.cars);
    } catch (error) {
      console.log("error")
    }
  }
  useEffect(() => {
    getCars();
  }, []);


  return (
    <div>
    <div>
      <div className='container'>
        <div className='row'>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/home">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">cars</li>
               </ol>
        </nav>
        </div>
      </div>
    </div>
    



      {/* Section Titles */}
      <div className="container text-center">
        <div className="row my-4">
          <div className="col-12">
            <div className="rounded-2 text-uppercase popular_btn text1 fw-bold">
              popular rental deals
            
          </div>
          <div className="col-12">
            <h2 className="text-capitalize my-3 popular_title text2">
              most popular cars rental deals
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mb-4">
        <div className="row g-4 justify-content-center">
          {cars.map((car, index)=>(
             <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100"> 
              <img src="src/assets/imges/card/car1.png" class="card-img-top w-75 m-auto d-block my-2" alt="popular-car"/>
       
               <div className="card-body">
        <h5 className="card-title fs-3">{car?.car}</h5>

        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex align-items-center gap-2">
            <img
              src="src/assets/imges/card/star.png"
              alt="review"
              width={16}
              height={16}
            />
            <small className="text-muted">(1345 reviews)</small>
          </div>
        </div>

        <div className="row g-2 mb-3">
          <div className="col-6">
            <p className="card-text d-flex align-items-center gap-2">
              <img
                src="src/assets/imges/card/user.png"
                alt="user"
                width={16}
                height={16}
              />
              <small className="text-muted">2 Passenger</small>
            </p>
            <p className="card-text d-flex align-items-center gap-2">
              <i className="fa-solid fa-calendar-days"></i>
              <small className="text-muted">2021</small>
            </p>
          </div>

          <div className="col-6">
            <p className="card-text d-flex align-items-center gap-2">
              <img
                src="src/assets/imges/card/d8wxke_2_.png"
                alt="ac"
                width={16}
                height={16}
              />
              <small className="text-muted">Air conditioning</small>
            </p>
            <p className="card-text d-flex align-items-center gap-2">
              <img
                src="src/assets/imges/card/Frame.png"
                alt="frame"
                width={16}
                height={16}
              />
              <small className="text-muted">Automatic</small>
            </p>
          </div>
        </div>

        <hr />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="text-muted mb-0">Price</p>
          <div className="d-flex align-items-baseline gap-1">
            <h6 className="mb-0">{car?.price}</h6>
            <p className="text-muted mb-0">/ day</p>
          </div>
        </div>

        <Link to={`/carDetail/${car?.id}`} className="btn btn-primary w-100 text-white text-decoration-none">
          View details
          <img
            src="src/assets/imges/card/arrow-right.png"
            alt="arrowRight"
            className="ms-2"
            width={16}
            height={16}
          />
        </Link>
      </div>
</div>
</div>
))
}
    </div>
   </div>
     
      </div>
      </div>
  )
}
