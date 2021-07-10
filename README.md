# Asynchronous JS Tutorial (Using the Pagerduty API)

Learn to make asynchronous calls to any API using JavaScript.

## Part 1

Get started by making an API call using a callback function, and another call using a promise. The Air Visual API is used as an example to warm-up.

Go to the IQAir site (iqair.com) and make a free community account. Then log in and generate an API key. Copy the key onto your clipboard.

Open up your project code and create a `.env` file. Here you can store credentials as environment variables, rather than having them visible directly in the code. Create an environment variable for your API key (do not use quotation marks):
`AIR_API_KEY=[enter-here]`

In `start.js`, include this line to configure environment variables:
`require("dotenv").config()`

To use the Fetch API to make requests, install the `node-fetch` dependency:
`npm install node-fetch`

Back at the API dashboard, check out the documentation for the Air Visual API. Go to the Version 2 section and look at example requests/ responses. The first one is a GET request to list supported countries.

To make a call using your API key, copy the API URL provided in the documentation and replace `{{YOUR_API_KEY}}` with `process.env.AIR_API_KEY` as a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
