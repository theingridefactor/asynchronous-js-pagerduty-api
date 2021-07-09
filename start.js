require("dotenv").config();

const fetch = require('node-fetch');

// GET data asynchronously with callback
function loadCountryDataWithCallback(callbackFunc) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`http://api.airvisual.com/v2/countries?key=${process.env.API_KEY}`, requestOptions);
    callbackFunc(response);      
}

function logData(data) {
    data.then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

loadCountryDataWithCallback(logData);

// GET data asynchronously with promise
function loadCountryDataWithPromise() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`http://api.airvisual.com/v2/countries?key=${process.env.API_KEY}`, requestOptions);
    return response;    
}

loadCountryDataWithPromise().then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  .finally(console.log('DONE'));




