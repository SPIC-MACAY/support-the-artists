import BackButton from "components/manishComponents/BackButton";
import SearchArtists from "components/manishComponents/SearchArtists";
import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-between items-center	">
        <div className="flex items-center">
          <BackButton />
          <h3>Go Back to Spicmacay!</h3>
        </div>
        <SearchArtists />
      </div>
    </>
  );
};

export default Navigation;
