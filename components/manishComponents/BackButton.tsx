import Link from "next/link";
import React, { FC } from "react";

interface BackButtonProps {
  navigate: any;
}

const BackButton: FC<BackButtonProps> = (props): JSX.Element => {
  return (
    <>
      <Link href={props.navigate}>
        <div
          className="px-4 m-2 py-4 inline-block rounded-full "
          style={{
            background: "#ffe00094",
            boxShadow: "3px 6px 10px rgb(0 0 0 / 30%)",
          }}
          title="Go to support the artist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
      </Link>
    </>
  );
};

export default BackButton;
