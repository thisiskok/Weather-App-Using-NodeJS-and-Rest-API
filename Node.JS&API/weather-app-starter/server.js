const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();

// Serve the public folder as static files
app.use(express.static("public"));

// Serve the HTML file directly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  const apiKey = "5f676f59216579a44023cb33cbe03adf";

  // Add your logic here to fetch weather data from the API
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let weather;
  // null by default
  let error = null;
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    // get data error so weather is a null
    weather = null;
    error = "Error, Please try again";
  }
  // Render the index template with the weather data and error message
  res.json({ weather, error });
});

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
