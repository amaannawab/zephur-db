import React, { ReactElement } from "react";

export default function HomePage(): ReactElement {
  return (
    <>
      <div style={{ width: "100%", paddingLeft: "15%", paddingRight: "5%" }}>
        <div
          style={{
            width: "70%",
            height: "331px",
            marginTop: "4%",
            border: "1px solid black",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              font: "normal normal bold 38px/66px Poppins",
              paddingLeft: "44px",
            }}
          >
            Find Hospitals to cater your needs
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "45px",
            width: "80%",
            marginTop: "-23px",
            paddingLeft: "1.5%",
          }}
        >
          <input
            placeholder="Search by any hospital, diagnosis, disease.."
            style={{
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 5px 10px #00000029",
              borderRadius: "10px",
              color: "black",
              fontSize: "18px",
              width: "66%",
            }}
          />
          <div
            style={{
              color: "white",
              background: "#000000 0% 0% no-repeat padding-box",
              borderRadius: "0px 10px 10px 0px",
              marginLeft: "-14px",
              display: "flex",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <i
              style={{ alignSelf: "center", marginLeft: "7px" }}
              className="fa fa-search"
              aria-hidden="true"
            ></i>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
