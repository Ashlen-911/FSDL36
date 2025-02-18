// app.js
const apiKey = "e997047d95bf448b91892938251802 "; // Replace with your actual WeatherAPI key

// Function to fetch and display weather data
async function getWeather() {
  const city = document.getElementById("city-input").value;
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(url);
    
    // Check if the response was successful
    if (!response.ok) {
      alert("Error: Unable to fetch weather data!");
      return;
    }

    const data = await response.json();

    // Handle the case where the city is not found
    if (data.error) {
      alert("City not found! Please check the name and try again.");
      return;
    }

    // Update the weather info on the page
    document.getElementById("city-name").innerText = `Weather in ${data.location.name}, ${data.location.country}`;
    document.getElementById("temperature").innerText = `Temperature: ${data.current.temp_c}°C`;
    document.getElementById("weather-description").innerText = `Condition: ${data.current.condition.text}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.current.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind Speed: ${data.current.wind_kph} kph`;

  } catch (error) {
    alert("Error fetching weather data. Please try again.");
    console.error("Error:", error);
  }
}
