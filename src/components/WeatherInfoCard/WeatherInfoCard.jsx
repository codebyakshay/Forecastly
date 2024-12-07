import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { wp } from '../../utils/Responsive';

import WindIcon from 'react-native-vector-icons/FontAwesome6';

const yesterdayWindSpeed = 14;
const todayWindSpeed = 15;

const WeatherInfoCard = ({
  icon = <WindIcon name="wind" size={16} />,
  label = 'Wind Speed',
  value = '12',
  unit = 'Km/H',
  change = '',
}) => {
  const changeInWindSpeed = todayWindSpeed - yesterdayWindSpeed;
  return (
    <View style={styles.card}>
      <View
        style={{
          gap: wp('2%'),
          padding: 15,
          flexDirection: 'row',
          width: '70%',
          gap: 10,
        }}>
        <View style={styles.iconContainer}>{icon}</View>

        <View style={styles.infoContainer}>
          <View style={styles.textConatiner}>
            <Text style={styles.labelText}>{label}</Text>
            <Text style={styles.labelValue}>
              {value} {unit}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoCard;
