import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { wp } from '../../utils/Responsive';
import WeatherInfoCard from '../../components/WeatherInfoCard/WeatherInfoCard';
import WindIcon from 'react-native-vector-icons/FontAwesome6';
import HumidityIcon from 'react-native-vector-icons/FontAwesome5';
import PressureIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HourlyForecastCard from '../../components/HourlyForecastCard/HourlyForecastCard';

export default function TodayDetailsTab({ weather, forecast }) {
  if (!weather) return null; // Ensure weather data is available

  const windSpeed = weather?.wind?.speed || '--';
  const humidity = weather?.main?.humidity || '--';
  const pressure = weather?.main?.pressure || '--';

  // console.log(weather);

  return (
    <ScrollView style={{ flex: 1, marginBottom: 10 }}>
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
      </View>

      <View style={{ marginVertical: 20 }}>
        <HourlyForecastCard forecast={forecast} weather={weather} />
      </View>

      <View style={{ marginVertical: 5 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  weatherInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: wp('4%'),
  },
});
