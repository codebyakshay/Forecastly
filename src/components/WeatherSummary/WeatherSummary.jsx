import { View, Text } from 'react-native';
import React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { fonts } from '../../Constant/Fonts';

export default function WeatherSummary({ data, forecast }) {
  if (!data?.dt || !forecast?.list) {
    return null;
  }

  // Date formatting
  const date = new Date(data.dt * 1000);
  const formattedDate = date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  // Calculate max and min temperatures from forecast data
  let maxTemp = Number.MIN_VALUE;
  let minTemp = Number.MAX_VALUE;

  forecast.list.forEach((item) => {
    const temp = item.main.temp;
    if (temp > maxTemp) maxTemp = temp;
    if (temp < minTemp) minTemp = temp;
  });

  maxTemp = maxTemp === Number.MIN_VALUE ? '--' : maxTemp.toFixed(1);
  minTemp = minTemp === Number.MAX_VALUE ? '--' : minTemp.toFixed(1);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <View style={{ width: widthPercentageToDP('50%') }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontFamily: fonts.Montserrat.light,
          }}>
          {formattedDate}
        </Text>
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            fontFamily: fonts.Montserrat.semiBold,
          }}>
          Day {Math.round(maxTemp)}°
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'white',
            fontFamily: fonts.Montserrat.semiBold,
          }}>
          Night {Math.round(minTemp)}°
        </Text>
      </View>
    </View>
  );
}
