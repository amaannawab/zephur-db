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
      </div>
    </>
  );
}
