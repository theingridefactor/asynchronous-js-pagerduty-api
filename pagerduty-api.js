require("dotenv").config();

const fetch = require("node-fetch");
const pdapiToken = process.env.PD_API_TOKEN;

const devData = require("./fake-dev-data.js");

var defaultOptions = {
  headers: {
    Accept: "application/vnd.pagerduty+json;version=2",
    "Content-Type": "application/json",
    Authorization: `Token token=${pdapiToken}`,
  },
};

const sendApiRequest = (url, options, funcLogResult) => {
  const myPromise = fetch(url, options);
  myPromise
    .then((response) => response.json())
    .then((data) => funcLogResult(data))
    .catch((error) => console.log("Request failed", error));
};

const logResult = (response) => {
  if (response.error != null) {
    throw new Error(response.error);
  }
  console.log("Request succeeded with JSON response", response);
};

const createPagerdutyService = () => {
  options = defaultOptions;
  options.method = "POST";
  var url = `https://api.pagerduty.com/services`;

  devData.services.forEach((entry) => {
    options.body = JSON.stringify(entry);
    sendApiRequest(url, options, logResult);
  });
};

const listPagerdutyTeams = () => {
  var url = `https://api.pagerduty.com/teams?total=false`;
  sendApiRequest(url, defaultOptions, logResult);
};

listPagerdutyTeams();
