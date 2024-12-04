import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../Constant/Colors';

const CustomButton = ({ title = 'home', isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text
        style={[
          styles.text,
          isActive ? styles.activeText : styles.inactiveText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp('25%'), // Adjust width based on screen size
    height: hp('4%'), // Adjust height based on screen size
    borderRadius: wp('2%'), // Make the button corners responsive
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('1%'), // Space between buttons
  },
  activeButton: {
    backgroundColor: Colors.primaryButtonBackground, // Active background color
  },
  inactiveButton: {
    backgroundColor: Colors.secondaryButtonBackground, // Inactive background color
    borderWidth: 1,
    borderColor: Colors.secondaryButtonBorder, // Border for inactive buttons
  },
  text: {
    fontSize: wp('4%'), // Responsive font size
    fontWeight: '600', // Semi-bold
  },
  activeText: {
    color: 'white', // Text color for active button
  },
  inactiveText: {
    color: Colors.primaryText, // Text color for inactive button
  },
});

export default CustomButton;
