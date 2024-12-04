import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { wp } from '../../utils/Responsive';
import WeatherInfoCard from '../../components/WeatherInfoCard/WeatherInfoCard';

export default function TodayDetailsTab({ forecast, weather }) {
  console.log(JSON.stringify(weather));
  return (
    <ScrollView style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.weatherInfoContainer}>
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
        <WeatherInfoCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  weatherInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: wp('4%'),
  },
});
