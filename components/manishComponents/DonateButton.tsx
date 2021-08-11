import Link from "next/link";
import React from "react";

const DonateButton = () => {
  return (
    <>
      <div
        className="inline-block py-2 px-4 mx-2 text-white "
        style={{ background: "red" }}
      >
        <Link href="./">DONATE</Link>
      </div>
    </>
  );
};

export default DonateButton;
