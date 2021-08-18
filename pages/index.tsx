// import groupBy from "lodash.groupby";
// import DonateButton from "components/manishComponents/DonateButton";
import DonateList from "components/manishkit/DonateList";
import Navigation from "components/manishkit/Navigation";
import QrCodeSection from "components/manishkit/QrCodeSection";

export async function getServerSideProps() {
  let apiEndPoint = "http://localhost:3000/api/support-the-artists";
  const res = await fetch(apiEndPoint);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export interface ArtistData {
  name: string;
  artForm: string;
  mobileNumber: string;
  youTubeLink: string;
}
let artForm = "See artist on the basis of art form";
let stateWise = "See artist on the basis of state";
let urlArtForm = "./artWise/ArtWise";
let urlState = "./stateWise/StateWise";
let goBack = "https://spicmacay.org/support-the-artist";
let backMessage = "Go Back to Spicmacay!";

export const getArtistDataFromData = (data: any): ArtistData => {
  // const sampleData = {"date":"Date(2021,5,3)","episode":1," name":"dayam khan","mobile number":9024005284,"art form":"rajasthani folk","category":"rajasthan","state":"no-044710065357","account number":"IPOS0000001","IFSC code":"india post payment bank","bank":"siff academy","branch":"https://youtu.be/xXd7Nb9O3ps"}
  return {
    name: data[" name"],
    artForm: data["art form"],
    mobileNumber: data["mobile number"],
    youTubeLink: "",
  };
};

// const sampleData: ArtistData[] = [
//   {
//     name: "dayam khan",
//     artForm: "rajasthani folk",
//     mobileNumber: "9024005284",
//     youTubeLink: "",
//   },
//   {
//     name: "dayam khan2",
//     artForm: "rajasthani folk",
//     mobileNumber: "9024005284",
//     youTubeLink: "",
//   },
//   {
//     name: "dayam khan",
//     artForm: "kalighat painting",
//     mobileNumber: "9024005284",
//     youTubeLink: "",
//   },
// ];

// export default function Home({ data }: { data: any[] }) {

export default function Home() {
  // const structuredData = data.map((row) => getArtistDataFromData(row));
  // const artFormGroupData = groupBy(sampleData, "artForm");
  // console.log(artFormGroupData);
  // console.log(structuredData);
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <p>
        {/* <ul>{JSON.stringify(sampleData)}</ul> */}
        {/* <img src="sample-image.jpeg" /> */}
      </p>
      <Navigation url={goBack} back={backMessage} />
      <div className=" flex">
        <div style={{ flex: 3 }}>
          <QrCodeSection />
        </div>
        <div style={{ flex: 9 }}>
          <DonateList title={artForm} url={urlArtForm} />
          <DonateList title={stateWise} url={urlState} />
        </div>
      </div>
    </div>
  );
}
