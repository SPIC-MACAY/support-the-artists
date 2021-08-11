import groupBy from "lodash.groupby";
import DonateButton from "components/manishComponents/DonateButton";
import Navigation from "components/manishkit/Navigation";

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

export const getArtistDataFromData = (data: any): ArtistData => {
  // const sampleData = {"date":"Date(2021,5,3)","episode":1," name":"dayam khan","mobile number":9024005284,"art form":"rajasthani folk","category":"rajasthan","state":"no-044710065357","account number":"IPOS0000001","IFSC code":"india post payment bank","bank":"siff academy","branch":"https://youtu.be/xXd7Nb9O3ps"}
  return {
    name: data[" name"],
    artForm: data["art form"],
    mobileNumber: data["mobile number"],
    youTubeLink: "",
  };
};

const sampleData: ArtistData[] = [
  {
    name: "dayam khan",
    artForm: "rajasthani folk",
    mobileNumber: "9024005284",
    youTubeLink: "",
  },
  {
    name: "dayam khan2",
    artForm: "rajasthani folk",
    mobileNumber: "9024005284",
    youTubeLink: "",
  },
  {
    name: "dayam khan",
    artForm: "kalighat painting",
    mobileNumber: "9024005284",
    youTubeLink: "",
  },
];

export default function Home({ data }: { data: any[] }) {
  const structuredData = data.map((row) => getArtistDataFromData(row));
  const artFormGroupData = groupBy(sampleData, "artForm");
  console.log(artFormGroupData);
  console.log(structuredData);
  return (
    <>
      <p>
        <ul>{JSON.stringify(sampleData)}</ul>
        {/* <img src="sample-image.jpeg" /> */}
      </p>
      <Navigation />

      <div className="flex my-2 mx-48  " style={{ background: "gray" }}>
        <div style={{ flex: 5 }}>
          <img
            className="py-2 px-4 h-48 w-full"
            src="https://media4.giphy.com/media/MF71GS0AhLs1jKULEp/giphy.gif?cid=790b76111bc8a54e8fca0c46364682f50ec378c385f441ab&rid=giphy.gif&ct=g"
            alt="img"
          />
        </div>
        <div style={{ flex: 9 }}>
          <h3>See artist State Wise</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rem
            praesentium ipsa expedita saepe, esse suscipit, debitis veritatis
            ipsam ratione id nulla quae eos cumque vitae libero ducimus
            assumenda. Sunt!
          </p>
        </div>
      </div>

      <DonateButton />
    </>
  );
}
