const apiKey = "0b4a4c07fb09b7c4eb6d176cadf23ff5"; // <-- اینو با کلید API خودت جایگزین کن
const button = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

button.addEventListener("click", async function () {
  const city = document.getElementById("cityInput").value.trim();

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  resultDiv.innerHTML = "Loading..."; // حالت لودینگ

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = error.message;
  }
});
