import React from "react";
import backgroundImage from "../../assets/img/blue-fiber-bg.png";

export const PitchBattleSection = ({ title, description }) => {
  return (
    <section
      style={{
        minHeight: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start", // Align content to the left
        alignItems: "center", // Centers the section vertically
        padding: "0 16px", // equivalent to px-4 in Tailwind
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
      }}
    >
      <div
        style={{
          padding: "5px",
          borderRadius: "50px",
          background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
          marginLeft: "7%",
          width: "700px",
          height: "400px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "3rem",
            borderRadius: "45px",
            background: "rgba(28, 28, 28, 0.9)",
            color: "white",
            width: "100%",
            height: "100%",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{title}</h2>
          <p style={{ fontSize: "1.125rem", marginBottom: "0" }}>{description}</p>
        </div>
      </div>
    </section>
  );
};
