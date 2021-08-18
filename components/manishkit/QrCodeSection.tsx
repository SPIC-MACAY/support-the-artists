import DonateButton from "components/manishComponents/DonateButton";
import React from "react";

const QrCodeSection = () => {
  return (
    <div className="my-3 mr-0 ml-7 p-3 text-center ">
      <img className="inline" src="qrCode.png" alt="qrcode" />
      <p className="my-4 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, eos?
        Earum inventore magnam iste, modi ducimus eaque? Aspernatur, dolorum
        repudiandae.
      </p>
      <DonateButton navigate="https://google.com" />
    </div>
  );
};

export default QrCodeSection;
