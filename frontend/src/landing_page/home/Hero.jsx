import React from "react";

export default function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="Hero page" className="mb-5" />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          style={{ width: "25%", margin: "0 auto" }}
          className="p-2 btn btn-primary"
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}
