import React from 'react';
import { View, Text, FlatList } from 'react-native';
import HourCard from '../HourCard/HourCard';
import ClockIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { wp } from '../../utils/Responsive';
import { styles } from './styles';

export default function HourlyForecastCard({ forecast }) {
  const cityTimezone = forecast.city.timezone;

  // Sort the forecast list by dt to ensure chronological order
  const sortedList = [...forecast.list].sort((a, b) => a.dt - b.dt);

  // Take the earliest forecast time as a reference
  const earliestItem = sortedList[0];
  const earliestTimestampLocal = (earliestItem.dt + cityTimezone) * 1000;
  const earliestDateLocal = new Date(earliestTimestampLocal);

  // Define "today" based on the earliest forecast entry
  const today = new Date(
    earliestDateLocal.getUTCFullYear(),
    earliestDateLocal.getUTCMonth(),
    earliestDateLocal.getUTCDate(),
  );

  // Define "tomorrow" as one day after "today"
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Define "dayAfterTomorrow" as one day after "tomorrow"
  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(tomorrow.getDate() + 1);

  const filteredForecast = sortedList.filter((item) => {
    const localItemTimestamp = (item.dt + cityTimezone) * 1000;
    const itemDate = new Date(localItemTimestamp);
    return itemDate >= today && itemDate < dayAfterTomorrow;
  });

  // Format the local time from a timestamp (already adjusted to city local time)
  const formatLocalTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const renderHourCard = ({ item }) => {
    const localItemTimestamp = (item.dt + cityTimezone) * 1000;
    const time = formatLocalTime(localItemTimestamp);
    const temperature = `${Math.round(item.main.temp)}°`;

    // Construct the icon URL from the weather data
    const iconCode =
      item.weather && item.weather[0] ? item.weather[0].icon : '01d';
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    return <HourCard time={time} temperature={temperature} iconUrl={iconUrl} />;
  };

  console.log(forecast);
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 5,
            borderRadius: wp('100%'),
          }}>
          <ClockIcon name="clock-outline" size={20} />
        </View>
        <Text style={styles.headerText}>Hourly Forecast</Text>
      </View>
      <FlatList
        data={filteredForecast}
        renderItem={renderHourCard}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
