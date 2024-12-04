import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { wp } from '../../utils/Responsive';

import WindIcon from 'react-native-vector-icons/FontAwesome6';
import ArrowUp from 'react-native-vector-icons/MaterialIcons';
import ArrowDown from 'react-native-vector-icons/MaterialIcons';

const yesterdayWindSpeed = 14;
const todayWindSpeed = 15;

const WeatherInfoCard = ({
  icon = <WindIcon name="wind" size={16} />,
  label = 'Wind Speed',
  value = '12',
  unit = 'Km/H',
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

        <View style={styles.changeIndicator}>
          {changeInWindSpeed > 0 ? (
            <ArrowUp name="arrow-drop-up" size={15} color="purple" />
          ) : changeInWindSpeed < 0 ? (
            <ArrowDown name="arrow-drop-down" size={15} color="#880808" />
          ) : null}

          <Text style={{ fontSize: 10 }}>
            {changeInWindSpeed}% {unit}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfoCard;
