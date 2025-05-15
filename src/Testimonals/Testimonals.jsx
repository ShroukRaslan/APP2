import React from 'react'


const testimonials = [
  {
    name: "Charlie Johnson",
    image: "src/assets/imges/landing-page/sec-6/girl.png", 
    rating: 5.5,
    comment:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    time: "Last updated 3 mins ago",
  },
  {
    name: "Charlie Johnson",
    image: "src/assets/imges/landing-page/sec-6/Rectangle 8 (1).png",
    rating: 5.5,
    comment:
      "I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.",
    time: "Last updated 3 mins ago",
  },
];


export default function Testimonals() {
  return (
 
    <div className="container py-5 mb-5">
      <div className="text-center mb-4">
        <span className=" bg-light text-primary mb-3 p-3">TESTIMONIALS</span>
        <h2 className="fw-bold p-5">What People Say About Us?</h2>
      </div>

      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-3 d-flex flex-row overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="img-fluid"
                style={{ width: "40%", objectFit: "cover" }}
              />
              <div className="p-3 d-flex flex-column justify-content-between" style={{ width: "60%" }}>
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <h4 className="mb-0 fw-bold">{testimonial.rating}</h4>
                    <span className="ms-2 text-muted">stars</span>
                  </div>
                  <div className="text-warning mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>
                  <p className="mb-2">{testimonial.comment}</p>
                </div>
                <div>
                  <strong>{testimonial.name}</strong>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>{testimonial.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
