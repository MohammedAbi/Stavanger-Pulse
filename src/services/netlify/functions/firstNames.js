export default async () => {
  const res = await fetch(
    "https://opencom.no/dataset/85ee1fa5-4ba9-4ffa-b218-e7e19c5f3f4f/resource/b16044f7-30fa-465c-97c4-b34b8446693d/download/json-dagligfolkeregisterdatafornavn.json",
  );

  const data = await res.json();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(data),
  };
};
