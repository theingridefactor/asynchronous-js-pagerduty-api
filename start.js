require("dotenv").config();

const fetch = require('node-fetch');

// GET data asynchronously with callback
function loadCountryDataWithCallback(callback) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`http://api.airvisual.com/v2/countries?key=${process.env.API_KEY}`, requestOptions);
 
    callback(response, function(data){
        console.log(data);
    }, function(e) {
        console.log(e);
    });      
}

function callbackFunc(response, callback1, failureCallback) {
    if (!response.ok) {
        failureCallback(response.error);
    }
    else {
        callback1(response.text());
    }
}

loadCountryDataWithCallback(callbackFunc);

// GET data asynchronously, no callback
function loadCountryData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let response = fetch(`http://api.airvisual.com/v2/countries?key=${process.env.API_KEY}`, requestOptions);
    return response;    
}

loadCountryData().then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error))
  .finally(console.log('DONE'));




