import Link from "next/link";
import React, { FC } from "react";

interface DonateButtonProps {
  navigate: any;
}

const DonateButton: FC<DonateButtonProps> = (props): JSX.Element => {
  return (
    <>
      <div
        className="inline-block py-2 px-4 mx-2 text-white "
        style={{ background: "red" }}
      >
        <Link href={props.navigate}>DONATE</Link>
      </div>
    </>
  );
};

export default DonateButton;
