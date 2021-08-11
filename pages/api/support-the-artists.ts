import PublicGoogleSheetsParser from "public-google-sheets-parser";

export default async function handler(_: any, res: any) {
  try {
    const spreadsheetId = process.env.SUPPORT_THE_ARTISTS_SPREADSHEET_ID;
    const sheetName = process.env.SUPPORT_THE_ARTISTS_SHEET_NAME;
    const parser = new PublicGoogleSheetsParser(spreadsheetId);
    return new Promise<void>((resolve, reject) => {
      parser
        .parse(spreadsheetId, sheetName)
        .then((items: any) => {
          res.status(200).json(items);
          res.end();
          resolve();
        })
        .catch((err: Error) => {
          reject(err);
          console.error(err);
        });
    });
  } catch (err) {
    console.error(err);
  }
}
