import React from "react";

// sm: md: lg: xl: 2xl:

function Newsletter(params: NewsletterProps) {
  return (
    <div
      style={{
        marginTop: "50px",
        height: "200px",
        padding: "10px",
        borderRadius: "30px",
        backgroundColor: "#FFB100",
      }}
    >
      <div style={{ color: "white" }}>
        <p
          style={{ fontWeight: "bold", fontSize: "40px", textAlign: "center", marginBottom: '25px' }}
        >
          Subscribe to my newsletter.
        </p>

        <p
          style={{ fontWeight: "bold", fontSize: "30px", textAlign: "center" }}
        >
          We post new articles every day.
        </p>

        <div>
          <div
            style={{
              backgroundColor: "#F0ECCF",
              width: "300px",
              height: "50px",
              borderRadius: "10px 0 0 10px",
              marginLeft: "400px",
              marginTop: "25px",
            }}
          >
            <input
              type="text"
              id="large-input"
              placeholder="Email address"
              style={{
                fontSize: "20px",
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
            />
            <p
              style={{
                backgroundColor: "#FBC252",
                width: "100px",
                height: "50px",
                borderRadius: "0 10px 10px 0",
                marginLeft: "300px",
                marginTop: "-41.2px",
                fontSize: "15px",
                paddingLeft: "10px",
                paddingTop: "16px",
                cursor: 'pointer'
              }}
            >
              SUBSCRIBE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Newsletter.defaultProps = {};

interface NewsletterProps {}

export default Newsletter;
