import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { wp } from '../../utils/Responsive';

const HourCard = ({ time, temperature, iconUrl }) => {
  return (
    <View style={styles.hourCard}>
      <Text style={styles.time}>{time}</Text>
      <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
      <Text style={styles.temperature}>{temperature}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hourCard: {
    alignItems: 'center',
    marginHorizontal: wp('3%'),
  },
  time: {
    fontSize: 12,
    color: 'black',
  },
  weatherIcon: {
    width: 40,
    height: 40,
  },
  temperature: {
    fontSize: 12,
    color: 'black',
  },
});

export default HourCard;
