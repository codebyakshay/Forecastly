import { StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../Constant/Colors';
import { fonts } from '../../Constant/Fonts';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f1ebfc',
  },

  header: {
    backgroundColor: Colors.cardBackground,
    borderBottomStartRadius: wp('10%'),
    borderBottomEndRadius: wp('10%'),
  },

  placeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: hp('3%'),
    marginBottom: 50,

    height: hp('5%'),
  },

  textStyle: {
    fontFamily: fonts.Parkinsans.medium,
    fontSize: wp('7%'),
  },

  // footer styles
  footer: {
    backgroundColor: '#f1ebfc',
    padding: 10,
    flex: 1,
  },
  segmentController: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: wp('4%'),
  },
});
