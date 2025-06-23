// const obj = {
//     "name": "ajad",
//     "temperature": 72

// };
// console.log(obj);


const sample = `{
  "location": {
    "name": "Bangalore",
    "region": "Karnataka",
    "country": "India",
    "lat": 12.97,
    "lon": 77.59,
    "timezone": "Asia/Kolkata",
    "localtime": "2025-06-23 20:45"
  },
  "current": {
    "temperature_c": 27.0,
    "temperature_f": 80.6,
    "is_day": 1,
    "condition": {
      "text": "Partly cloudy",
      "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
      "code": 1003
    },
    "wind_kph": 15.0,
    "wind_degree": 90,
    "wind_dir": "E",
    "pressure_mb": 1012.0,
    "humidity": 74,
    "cloud": 50,
    "feelslike_c": 29.0,
    "uv": 6.0
  }
}
`

const pasedData = JSON.parse(sample);
console.log(pasedData.location.name);
