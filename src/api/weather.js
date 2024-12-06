const API_KEY = '34845b794cf1314c2fc94b09b248acc8'; // Replace with your OpenWeather API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async ({ queryKey }) => {
  const { lat, lon } = queryKey[1];
  const response = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};

export const fetchForecast = async ({ queryKey }) => {
  const { lat, lon } = queryKey[1];
  const response = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch forecast data');
  }
  return response.json();
};
