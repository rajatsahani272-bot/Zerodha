import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-6">
          <img
            src={imageURL}
            alt={productName}
          />
        </div>

        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div>
            <a href={tryDemo || "/products"}>
              Try Demo →
            </a>

            <a
              href={learnMore || "/products"}
              style={{ marginLeft: "50px" }}
            >
              Learn More →
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay || "/products"}>
              <img
                src="/media/google.svg"
                alt="Download on Google Play"
              />
            </a>

            <a href={appStore || "/products"}>
              <img
                src="/media/appstore.svg"
                alt="Download on App Store"
              />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;