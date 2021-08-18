import BackButton from "components/manishComponents/BackButton";
import SearchArtists from "components/manishComponents/SearchArtists";
import React, { FC } from "react";

interface NavigationProps {
  // title: String;
  url: any;
  back: string | boolean;
}

const Navigation: FC<NavigationProps> = (props): JSX.Element => {
  return (
    <>
      <div className="flex justify-between items-center	">
        <div className="flex items-center">
          <BackButton navigate={props.url} />
          <h3>{props.back ? props.back : "Go Back"}</h3>
        </div>
        <SearchArtists />
      </div>
    </>
  );
};

export default Navigation;
