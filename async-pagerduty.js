require("dotenv").config();

const fetch = require("node-fetch");

const pdApiUrl = "https://api.pagerduty.com";
const pdapiToken = process.env.PD_API_TOKEN;

const devData = require("./fake-data.js");

var defaultOptions = {
  headers: {
    Accept: "application/vnd.pagerduty+json;version=2",
    "Content-Type": "application/json",
    Authorization: `Token token=${pdapiToken}`,
  },
};

const sendApiRequest = (url, options, myLogger) => {
  const myPromise = fetch(url, options);
  myPromise
    .then((response) => response.json())
    .then((data) => logResult(data, myLogger))
    .catch((error) => console.log("Request failed", error));
};

var success = "Request succeeded with JSON response";

const logResult = (response, myLogger) => {
  if (response.error != null) {
    throw new Error(response.error);
  }
  myLogger(response);
};

const createPagerdutyService = () => {
  var options = defaultOptions;
  options.method = "POST";
  var url = `${pdApiUrl}/services`;

  devData.services.forEach((entry) => {
    options.body = JSON.stringify(entry);
    sendApiRequest(url, options, (response) => {
      console.log(success, response);
    });
  });
};

const listPagerdutyTeams = () => {
  var url = `${pdApiUrl}/teams?total=false`;
  sendApiRequest(url, defaultOptions, (response) => {
    console.log(success, response);
  });
};

const getPagerdutyEscalPolicy = (id) => {
  var url = `${pdApiUrl}/escalation_policies/${id}`;
  sendApiRequest(url, defaultOptions, (response) => {
    console.log(success, response.escalation_policy);
  });
};

// Example calls
listPagerdutyTeams();
getPagerdutyEscalPolicy("PEHGOGO");

