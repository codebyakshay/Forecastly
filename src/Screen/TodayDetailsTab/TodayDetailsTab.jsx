import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { wp } from '../../utils/Responsive';

//icons
import WeatherInfoCard from '../../components/WeatherInfoCard/WeatherInfoCard';
import WindIcon from 'react-native-vector-icons/FontAwesome6';
import HumidityIcon from 'react-native-vector-icons/FontAwesome5';
import PressureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HourlyForecastCard from '../../components/HourlyForecastCard/HourlyForecastCard';
import SunriseSunsetCard from '../../components/SunriseSunsetCard/SunriseSunsetCard';
import SunsetIcon from 'react-native-vector-icons/Feather';
import SunriseIcon from 'react-native-vector-icons/Feather';

//
export default function TodayDetailsTab({ weather, forecast }) {
  if (!weather) return null; // Ensure weather data is available

  const windSpeed = weather?.wind?.speed || '--';
  const humidity = weather?.main?.humidity || '--';
  const pressure = weather?.main?.pressure || '--';

  const formatLocalTime = (timestamp, timezoneOffsetInSeconds) => {
    // Convert the UNIX timestamp to milliseconds and adjust for the timezone offset
    const localDate = new Date((timestamp + timezoneOffsetInSeconds) * 1000);

    // Get hours and minutes from the date object considering local timezone
    const hours = localDate.getUTCHours();
    const minutes = localDate.getUTCMinutes();

    // Format hours and minutes with leading zeros if necessary
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  };

  // This timezoneOffset should be correct as per your weather data, which is 19800 seconds for Raipur
  const timezoneOffset = weather?.timezone;

  const sunriseTime = weather?.sys?.sunrise
    ? formatLocalTime(weather.sys.sunrise, timezoneOffset)
    : '--';
  const sunsetTime = weather?.sys?.sunset
    ? formatLocalTime(weather.sys.sunset, timezoneOffset)
    : '--';

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.weatherInfoContainer}>
        {/* Wind Speed */}
        <WeatherInfoCard
          icon={<WindIcon name="wind" size={20} />}
          label="Wind Speed"
          value={windSpeed}
          unit="Km/H"
        />

        {/* Humidity */}
        <WeatherInfoCard
          icon={<HumidityIcon name="tint" size={20} />}
          label="Humidity"
          value={humidity}
          unit="%"
        />

        {/* Pressure */}
        <WeatherInfoCard
          icon={<PressureIcon name="gauge" size={20} />}
          label="Pressure"
          value={pressure}
          unit="hPa"
        />

        {/* Sunrise and Sunset */}
        <SunriseSunsetCard
          icon={<SunriseIcon name="sunrise" size={14} />}
          label="Sunrise"
          time={sunriseTime}
        />
        <SunriseSunsetCard
          icon={<SunsetIcon name="sunset" size={14} />}
          label="Sunset"
          time={sunsetTime}
        />
      </View>

      <View style={{ marginVertical: wp('5%') }}>
        <HourlyForecastCard forecast={forecast} weather={weather} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  weatherInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: wp('5%'),
  },
});
