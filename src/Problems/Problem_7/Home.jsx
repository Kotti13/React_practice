import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      
      <div className="text-center mb-5">
        <h1>Welcome to MOCOM</h1>
        <p className="text-muted">Discover the best products at unbeatable prices.</p>
        <Link to="/content" className="btn btn-danger mt-3">Shop Now</Link>
      </div>

    </div>
  );
}


export default Home;
