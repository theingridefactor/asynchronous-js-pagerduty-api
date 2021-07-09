require("dotenv").config();

const fetch = require("node-fetch");

const pdApiUrl = "https://api.pagerduty.com";
const pdapiToken = process.env.PD_API_TOKEN;

const myCustomOptions = {
  headers: {
    Accept: "application/vnd.pagerduty+json;version=2",
    "Content-Type": "application/json",
    Authorization: `Token token=${pdapiToken}`,
  },
};

fetch(`${pdApiUrl}/teams?total=false`, myCustomOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log("Request succeeded with JSON response", data);
  })
  .catch((error) => console.log("Request failed", error));
