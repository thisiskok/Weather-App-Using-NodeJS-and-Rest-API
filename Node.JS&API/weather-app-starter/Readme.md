
# Weather App

This is a weather application built with Node.js, Express, and Axios, fetching real-time weather data from the OpenWeatherMap API.

## Installation

1. Clone this repository to your local machine:

```bash
git clone <your-repository-url>
```

2. Navigate to the project folder:

```bash
cd weather-app-starter
```

3. Install the required dependencies by running:

```bash
npm i
```

This command installs all the packages listed in the `package.json` file, including Express (for handling server requests) and Axios (for making API calls).

## Running the App

After installing the dependencies, start the server by running:

```bash
npm start
```

This command runs the app using the `start` script defined in the `package.json` file, which simply runs the command `node app.js` to start the Express server.

## How it Works

- Once the server is running, open your browser and go to `http://localhost:3000`.
- Enter a city name in the input field and click "Get Weather" to retrieve real-time weather data from the OpenWeatherMap API.

