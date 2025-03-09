import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="fw-bold">MOCOM</h5>
              <p className="text-muted">Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Contact Us</h5>
              <p>Email: info@example.com</p>
              <p>Phone: +94 760000000</p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Address</h5>
              <p>123 Hospital Rd, Kalubowila, Dehiwela</p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Social Media</h5>
              <div className="d-flex gap-2">
                <a href="#">📱 Whatsapp</a>
                <a href="#">📘 Facebook</a>
                <a href="#">📷 Instagram</a>
                <a href="#">🎵 TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer