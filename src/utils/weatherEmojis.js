const getWeatherEmoji = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return "☀️"; // Clear sky
      break;
    case 1:
      return "🌤️"; // Mainly clear
      break;
    case 2:
      return "⛅"; // Partly cloudy
      break;
    case 3:
      return "☁️"; // Overcast
      break;
    case 4:
      return "🌧️"; // Light rain
      break;
    case 5:
      return "🌦️"; // Showers
      break;
    case 6:
      return "🌩️"; // Thunderstorm
      break;
    case 7:
      return "❄️"; // Snow
      break;
    case 8:
      return "🌨️"; // Snow showers
      break;
    case 9:
      return "🌫️"; // Fog
      break;
    case 10:
      return "🌧️"; // Rain showers
      break;
    case 11:
      return "🌧️"; // Heavy rain showers
      break;
    case 12:
      return "🌧️"; // Thunderstorm with rain
      break;
    case 13:
      return "🌨️"; // Heavy snow
      break;
    case 14:
      return "🌨️"; // Snow showers
      break;
    case 15:
      return "🌬️"; // Strong winds
      break;
    case 16:
      return "🌫️"; // Mist
      break;
    case 17:
      return "🌫️"; // Smoke
      break;
    case 18:
      return "🌨️"; // Snowfall
      break;
    case 19:
      return "🌫️"; // Dust
      break;
    case 20:
      return "🌫️"; // Haze
      break;
    case 21:
      return "🌫️"; // Sand
      break;
    case 22:
      return "🌫️"; // Fog
      break;
    case 23:
      return "🌪️"; // Tornado
      break;
    case 24:
      return "🌫️"; // Smoke
      break;
    case 25:
      return "❄️"; // Snow
      break;
    case 26:
      return "🌫️"; // Fog
      break;
    case 27:
      return "🌨️"; // Light snow showers
      break;
    case 28:
      return "🌨️"; // Heavy snow showers
      break;
    case 29:
      return "🌧️"; // Light rain
      break;
    case 30:
      return "🌧️"; // Heavy rain
      break;
    case 31:
      return "☀️"; // Clear sky
      break;
    case 32:
      return "🌤️"; // Mostly sunny
      break;
    case 33:
      return "🌥️"; // Partly cloudy
      break;
    case 34:
      return "🌥️"; // Mostly cloudy
      break;
    case 35:
      return "🌧️"; // Light rain showers
      break;
    case 36:
      return "🌨️"; // Heavy snow showers
      break;
    case 37:
      return "🌨️"; // Snow showers
      break;
    case 38:
      return "🌧️"; // Rain showers
      break;
    case 39:
      return "🌧️"; // Heavy rain showers
      break;
    case 40:
      return "🌨️"; // Snowfall
      break;
    case 41:
      return "🌨️"; // Heavy snow
      break;
    case 42:
      return "🌨️"; // Snow showers
      break;
    case 43:
      return "🌨️"; // Heavy snow showers
      break;
    case 44:
      return "🌪️"; // Tornado
      break;
    case 45:
      return "🌧️"; // Rain
      break;
    case 46:
      return "🌧️"; // Heavy rain
      break;
    case 47:
      return "🌨️"; // Snow
      break;
    case 48:
      return "🌨️"; // Heavy snow
      break;
    case 49:
      return "🌪️"; // Tornado
      break;
    case 50:
      return "🌫️"; // Mist
      break;
    case 51:
      return "🌫️"; // Smoke
      break;
    case 52:
      return "🌫️"; // Haze
      break;
    case 53:
      return "🌫️"; // Dust
      break;
    case 54:
      return "🌫️"; // Sand
      break;
    case 55:
      return "🌫️"; // Fog
      break;
    case 56:
      return "🌨️"; // Snowfall
      break;
    case 57:
      return "🌨️"; // Heavy snowfall
      break;
    case 58:
      return "🌨️"; // Snow showers
      break;
    case 59:
      return "🌨️"; // Heavy snow showers
      break;
    case 60:
      return "🌧️"; // Rain showers
      break;
    case 61:
      return "🌧️"; // Heavy rain showers
      break;
    case 62:
      return "🌨️"; // Snow showers
      break;
    case 63:
      return "🌨️"; // Heavy snow showers
      break;
    case 64:
      return "🌨️"; // Snowfall
      break;
    case 65:
      return "🌨️"; // Heavy snowfall
      break;
    case 66:
      return "🌧️"; // Rain showers
      break;
    case 67:
      return "🌧️"; // Heavy rain showers
      break;
    case 68:
      return "🌨️"; // Snow showers
      break;
    case 69:
      return "🌨️"; // Heavy snow showers
      break;
    case 70:
      return "🌧️"; // Rain showers
      break;
    case 71:
      return "🌧️"; // Heavy rain showers
      break;
    case 72:
      return "🌨️"; // Snow showers
      break;
    case 73:
      return "🌨️"; // Heavy snow showers
      break;
    case 74:
      return "🌨️"; // Snowfall
      break;
    case 75:
      return "🌨️"; // Heavy snowfall
      break;
    case 76:
      return "🌧️"; // Rain showers
      break;
    case 77:
      return "🌧️"; // Heavy rain showers
      break;
    case 78:
      return "🌨️"; // Snow showers
      break;
    case 79:
      return "🌨️"; // Heavy snow showers
      break;
    case 80:
      return "🌧️"; // Light rain showers
      break;
    case 81:
      return "🌧️"; // Moderate rain showers
      break;
    case 82:
      return "🌧️"; // Heavy rain showers
      break;
    case 83:
      return "🌨️"; // Light snow showers
      break;
    case 84:
      return "🌨️"; // Moderate snow showers
      break;
    case 85:
      return "🌨️"; // Heavy snow showers
      break;
    case 86:
      return "🌨️"; // Light snow
      break;
    case 87:
      return "🌨️"; // Moderate snow
      break;
    case 88:
      return "🌨️"; // Heavy snow
      break;
    case 89:
      return "🌨️"; // Light snow showers
      break;
    case 90:
      return "🌧️"; // Rain
      break;
    case 91:
      return "🌧️"; // Heavy rain
      break;
    case 92:
      return "🌨️"; // Snowfall
      break;
    case 93:
      return "🌨️"; // Heavy snowfall
      break;
    case 94:
      return "🌨️"; // Snow showers
      break;
    case 95:
      return "🌨️"; // Heavy snow showers
      break;
    case 96:
      return "🌪️"; // Tornado
      break;
    case 97:
      return "🌪️"; // Hurricane
      break;
    case 98:
      return "🌨️"; // Snow
      break;
    case 99:
      return "🌨️"; // Heavy snow
      break;
    default:
      return "❓"; // Unknown
  }
};

export default getWeatherEmoji;
