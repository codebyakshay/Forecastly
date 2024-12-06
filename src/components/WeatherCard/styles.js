import { StyleSheet } from 'react-native';
import { fonts } from '../../Constant/Fonts';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: wp('90%'),
    margin: 'auto',

    justifyContent: 'space-between',
  },
  degreeText: {
    fontSize: 80,
    color: 'white',
    fontFamily: fonts.Parkinsans.regular,
  },

  feelLikeText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: fonts.Montserrat.light,
  },

  conditionText: {
    fontSize: 24,
    color: 'white',
    fontFamily: fonts.Montserrat.light,
    margin: 5,
  },
});
