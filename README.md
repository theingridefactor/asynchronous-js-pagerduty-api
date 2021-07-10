# Asynchronous JS Tutorial (Using the Pagerduty API)

Learn to make asynchronous calls to any API using JavaScript.

## Part 1 - Callback vs. Promise
In `start.js`, the Air Visual API is used make one API call using a callback function, and another call using a promise.

1. Go to [IQAir.com](https://www.iqair.com/) and create an account. You can get a community account for free. Log in and generate an API key. Copy this key onto your clipboard.

2. Open up your project code and create a `.env` file. Here you can store credentials as environment variables, rather than having them visible directly in the code. Create an environment variable for your API key (do not use quotation marks):
`AIR_API_KEY=[enter-here]`

3. In `start.js`, configure environment variables: `require("dotenv").config()`. You can access your key as follows: `process.env.<enter-name-here>`

4. Use the Fetch API to make requests: `npm install node-fetch`

5. Back at the API dashboard, check out the documentation for the Air Visual API. Go to the Version 2 section and look at example requests/ responses. The first one is a GET request to list supported countries.

6. To make a call using your API key, first copy the API URL provided in the documentation and replace `{{YOUR_API_KEY}}` with `process.env.AIR_API_KEY`.
