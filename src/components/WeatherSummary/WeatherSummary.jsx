import { View, Text } from 'react-native';
import React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { fonts } from '../../Constant/Fonts';

export default function WeatherSummary({ weather }) {
  // Calculate local timestamp
  const localTimestamp = (weather.dt + weather.timezone) * 1000;
  const localDate = new Date(localTimestamp);

  // Arrays to map numeric day/month to names
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract date/time components using UTC methods
  const dayName = daysOfWeek[localDate.getUTCDay()];
  const monthName = months[localDate.getUTCMonth()];
  const day = localDate.getUTCDate();
  const hours = String(localDate.getUTCHours()).padStart(2, '0');
  const minutes = String(localDate.getUTCMinutes()).padStart(2, '0');

  // Format the date string as desired
  const formattedDate = `${dayName}, ${monthName} ${day}, ${hours}:${minutes}`;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
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
    </View>
  );
}
