import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "53%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            The text in the image is: Thematic investing platform <br /> that
            helps you invest in diversified <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "53%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            Our asset management venture <br />
            that is creating simple and transparent index <br /> funds to help
            you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "53%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            Systematic trading platform <br /> that allows you to create and
            backtest <br /> strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            Personalized advice on life <br /> and health insurance. No spam{" "}
            <br /> and no mis-selling.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "58%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            Options trading platform that lets you <br /> create strategies,
            analyze positions, and examine <br /> data points like open
            interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt=""
            style={{ width: "53%" }}
          />
          <p
            className="text-small text-muted pt-2"
            style={{ fontSize: "12px" }}
          >
            The text in the image is: Thematic investing platform <br /> that
            helps you invest in diversified <br /> baskets of stocks on ETFs.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
