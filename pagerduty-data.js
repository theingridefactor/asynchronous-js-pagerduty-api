require("dotenv").config();

const fetch = require("node-fetch");
var $ = require("jquery");

const pdapiToken = process.env.PD_API_TOKEN;

const data = {
  team: {
    id: "string",
    summary: null,
    type: "team",
    self: null,
    html_url: null,
    name: "Not Not Not Some Engineering",
    description: "The engineering teammmmmmm",
  },
};

const myCustomOptions = {
  method: "POST",
  headers: {
    Accept: "application/vnd.pagerduty+json;version=2",
    "Content-Type": "application/json",
    Authorization: `Token token=${pdapiToken}`,
  },
  body: JSON.stringify(data),
};

const pdApiUrl = "https://api.pagerduty.com";

const myPromise = fetch(`${pdApiUrl}/teams`, myCustomOptions);

myPromise
  .then((response) => response)
  .then((data) => {
    console.log("Request succeeded with JSON response", data);
  })
  .catch((error) => console.log("Request failed", error));
