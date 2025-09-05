# Weather App 🌤️

A simple weather application that displays current weather information for any city using the OpenWeatherMap API.

## Features

- 🔍 Search weather by city name
- 🌡️ Display temperature, humidity, and wind speed
- 🎨 Dynamic weather icons based on conditions

## Setup Instructions

### 1. Get API Key
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard (Your API key will be activated in about 10–30 minutes.)

### 2. Configure API Key
1. Copy `config.example.js` to `config.js`:
   ```bash
   cp config.example.js config.js
   ```
2. Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual API key:
   ```javascript
   const API_CONFIG = {
       weatherApiKey: "your_actual_api_key_here"
   };
   ```

### 3. Run the Application
1. Open `index.html` in your web browser
2. Enter a city name in the search box
3. Click the search button or press Enter
4. View the weather information!

## File Structure

```
Weather App/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── config.example.js   # API key template
├── config.js          # Your API key (not tracked by Git)
├── .gitignore         # Git ignore file
├── README.md          # This file
└── assets/
    ├── css/
    │   ├── style.css   # Main styles
    │   └── reset.css   # CSS reset
    ├── img/            # Weather icons
    └── favicon/        # Favicon files
```

## Supported Weather Conditions

- ☀️ Clear
- ☁️ Clouds
- 🌧️ Rain
- 🌦️ Drizzle
- 🌫️ Mist

## Technologies Used

- HTML5
- CSS3 (with Google Fonts - Poppins)
- Vanilla JavaScript
- OpenWeatherMap API
- Fetch API for HTTP requests

## Troubleshooting

### Common Issues

**"City not found" error:**
- Check spelling of city name
- Try different city names
- Some small cities might not be in the database

**Weather data not loading:**
- Check your internet connection
- Verify your API key is correct in `config.js`
- Check browser console for error messages

**No weather icon showing:**
- Check if image files exist in `assets/img/` folder
- Verify file paths in `script.js`

## Security Note

⚠️ **Important:** Never commit your actual API key to version control. The `config.js` file is ignored by Git for security reasons.

---

## This will be upgraded in the future.