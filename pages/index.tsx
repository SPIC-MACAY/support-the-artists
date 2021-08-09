export async function getServerSideProps() {
  let apiEndPoint = 'http://localhost:3000/api/support-the-artists';
  const res = await fetch(apiEndPoint);
  const data = await res.json();
  return {
    props: data, // will be passed to the page component as props
  };
}

export default function Home(googleSheetData: any) {
  console.log(googleSheetData);
  return (
    <ul>
      {JSON.stringify(googleSheetData)}
    </ul>
  );
}
