import DonateButton from "components/manishComponents/DonateButton";
import React, { FC } from "react";

interface DonateListProps {
  title: String;
  url: any;
}

const DonateList: FC<DonateListProps> = (props): JSX.Element => {
  return (
    <>
      <div
        className=" inline-flex my-4 mx-8 h-52 "
        style={{
          background: "#faeed9",
          boxShadow: " 6px 6px 10px rgb(0 0 0 / 30%) ",
        }}
      >
        <div style={{ flex: 5 }}>
          <img
            className="py-2 px-4 h-52 w-full"
            src="https://media4.giphy.com/media/MF71GS0AhLs1jKULEp/giphy.gif?cid=790b76111bc8a54e8fca0c46364682f50ec378c385f441ab&rid=giphy.gif&ct=g"
            alt="img"
          />
        </div>
        <div style={{ flex: 9 }}>
          <div className="flex h-full items-center ">
            <div>
              <h1 className="text-xl">{props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                rem praesentium ipsa expedita saepe, esse suscipit, debitis
                veritatis ipsam ratione id nulla quae eos cumque vitae libero
                ducimus assumenda. Sunt!
              </p>
              <div className="text-right mt-1 mr-1">
                <DonateButton navigate={props.url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateList;
