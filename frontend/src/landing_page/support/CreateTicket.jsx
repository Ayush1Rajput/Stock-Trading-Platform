import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5 ">
      <h2 className="fs-4 mb-5">To create a ticket, select a relevant topic</h2>
      <div className="row">
        {/* Account Opening */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i>Account
            Opening
          </h5>
          <ul className="list-unstyled mt-3 " style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                Resident individual
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Minor
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Non Resident Indian (NRI)
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Company, Partnership, HUF and LLP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Glossary
              </a>
            </li>
          </ul>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-user-circle me-2" aria-hidden="true"></i>Your
            Zerodha Account
          </h5>
          <ul className="list-unstyled mt-3" style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                Your Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Account modification
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Client Master Report (CMR) and DP
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Nomination
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Transfer and conversion of securities
              </a>
            </li>
          </ul>
        </div>

        {/* Kite */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-line-chart me-2" aria-hidden="true"></i>Kite
          </h5>
          <ul className="list-unstyled mt-3" style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                IPO
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Trading FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                MTF and Margins
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Charts and orders
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Alerts and Nudges
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                General
              </a>
            </li>
          </ul>
        </div>

        {/* Funds */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-credit-card me-2" aria-hidden="true"></i>Funds
          </h5>
          <ul className="list-unstyled mt-3" style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                Add money
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Withdraw money
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Add bank accounts
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                eMandates
              </a>
            </li>
          </ul>
        </div>

        {/* Console */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-tachometer me-2" aria-hidden="true"></i>Console
          </h5>
          <ul className="list-unstyled mt-3" style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Corporate actions
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Funds statement
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Segments
              </a>
            </li>
          </ul>
        </div>

        {/* Coin */}
        <div className="col-md-4 mb-4">
          <h5>
            <i className="fa fa-circle-o-notch me-2" aria-hidden="true"></i>Coin
          </h5>
          <ul className="list-unstyled mt-3" style={{ lineHeight: "2.2" }}>
            <li>
              <a href="#" className="text-decoration-none">
                Understanding mutual funds and Coin
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Coin app
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Coin web
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                Transactions and reports
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                National Pension Scheme (NPS)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
