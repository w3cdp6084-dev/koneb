const { Client } = require("@notionhq/client");
const databaseId = "5bc1fcd90fc04ecca446ef4c1abb2647";
const notion = new Client({
  auth: "secret_OpzQDTV3nu45pJe6n2QrDo5QRMbCH2B9HmYPRSrvwZN"
});
async function getBlogPosts() {
 const response = await notion.databases.query({
   database_id: databaseId
 });

 return response.results;
}
module.exports = {
 notion,
 getBlogPosts
};
