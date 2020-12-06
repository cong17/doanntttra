const baseUrl = 'https://api.openweathermap.org/data/2.5';
const REACT_APP_WEATHER_API_KEY = `20571ab45c74dc2a1897b60c5b8047a1`;
export const fetchWeatherData = (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=${REACT_APP_WEATHER_API_KEY}`;
  }
  return fetch(url);
};

export const fetchExtendedForecastData = (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;

  if (typeof city === 'object') {
    url = `${baseUrl}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=${REACT_APP_WEATHER_API_KEY}`;
  }

  return fetch(url);
};
