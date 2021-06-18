import React, { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <div style={{ width: "100%", height: "68px", background: "black" }}>
      <div
        style={{
          display: "flex",
          color: "white",
          paddingLeft: "10%",
          paddingRight: "5%",
        }}
      >
        <h2>Hospice</h2>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            marginLeft: "46px",
            marginTop: "10px",
          }}
        >
          <i
            style={{ color: "white" }}
            className="fa fa-map-marker"
            aria-hidden="true"
          ></i>
          <div style={{ marginLeft: "10px" }}>Pune,India</div>
        </div>
        <div
          style={{
            width: "50%",
            alignSelf: "flex-end",
            marginLeft: "auto",
            minHeight: "68px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              marginRight: "30px",
              marginTop: "10px",
            }}
          >
            Explore
          </div>
          <div
            style={{
              alignSelf: "center",
              marginTop: "10px",
              marginRight: "20px",
            }}
          >
            About us
          </div>
          <div
            style={{
              alignSelf: "flex-end",
              marginLeft: "auto",
              minHeight: "68px",
              display: "flex",
            }}
          >
            <div
              style={{
                alignSelf: "center",
                marginTop: "10px",
                marginRight: "25px",
                cursor: "pointer",
              }}
            >
              Login
            </div>
            <div
              style={{
                alignSelf: "center",
                marginTop: "13px",
                width: "98px",
                color: "black",
                height: "26px",
                background: "#FFFF 0% 0% no-repeat padding-box",
                borderRadius: "5px",
                textAlign: "center",
                paddingTop: "3px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
