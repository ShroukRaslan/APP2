// src/pages/CarDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CarPhoto from '../../public/Audi 1.png';



export default function CarDetail() {
  const { id } = useParams();

  return (
   
    <div className="container my-5">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/cars">Cars</a></li>
          <li className="breadcrumb-item active" aria-current="page">Car Details</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="row align-items-center">
        {/* Car Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <div className="bg-light p-3 rounded">
            <img
              src={CarPhoto}
              alt="Audi R8"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Car Details */}
        <div className="col-md-6">
          <button className="btn btn-outline-primary mb-3">WHY CHOOSE US</button>
          <h2 className="fw-bold">We Offer The Best Experience With Our Rental Deals</h2>

          <ul className="list-unstyled mt-4">
            <li className="mb-2">👤 2 Passanger.</li>
            <li className="mb-2">❄️ Air conditioning</li>
            <li className="mb-2">⚙️ CVT</li>
            <li className="mb-2">🚪 Doors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
