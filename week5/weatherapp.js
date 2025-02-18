// app.js
const apiKey = "2b634525868c4dfd85190232251802 "; // Replace with your OpenWeatherMap API key

// Function to fetch and display weather data
async function getWeather() {
  const city = document.getElementById("city-input").value;
  const url = `https://www.weatherapi.com/my/2b634525868c4dfd85190232251802 `;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    // Update the weather info on the page
    document.getElementById("city-name").innerText = `Weather in ${data.name}`;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weather-description").innerText = `Condition: ${data.weather[0].description}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
  } catch (error) {
    alert("Error fetching weather data");
  }
}
