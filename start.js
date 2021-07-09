require("dotenv").config();

const fetch = require('node-fetch');

var apiURL = "http://api.airvisual.com";

// Get data asynchronously with callback
function loadCountryDataWithCallback(callback) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`${apiURL}/v2/countries?key=${process.env.API_KEY}`, requestOptions);
 
    callback(response, function(data){
        console.log(data);
    }, function(e) {
        console.log(e);
    });      
}

function callbackFunc(response, callback, failureCallback) {
    if (!response.ok) {
        failureCallback(response.error);
    }
    else {
        callback(response.text());
    }
}

loadCountryDataWithCallback(callbackFunc);

// Get data asynchronously with a promise
function loadCountryData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`${apiURL}/v2/countries?key=${process.env.API_KEY}`, requestOptions);
    return response;    
}

loadCountryData().then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  .finally(console.log('Done'));




