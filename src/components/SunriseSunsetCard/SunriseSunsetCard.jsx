import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { wp } from '../../utils/Responsive';

import WindIcon from 'react-native-vector-icons/FontAwesome6';

const SunriseSunsetCard = ({
  icon = <WindIcon name="wind" size={16} />,
  label,
  time,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.labelText}>{label}</Text>
      <Text style={styles.timeText}>{time}</Text>
    </View>
  );
};

export default SunriseSunsetCard;
