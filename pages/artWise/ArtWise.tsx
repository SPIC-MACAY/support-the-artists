import Navigation from "components/manishkit/Navigation";
import React from "react";

let goBack = "/index";

const ArtWise = () => {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Navigation url={goBack} back={false} />
    </div>
  );
};

export default ArtWise;
