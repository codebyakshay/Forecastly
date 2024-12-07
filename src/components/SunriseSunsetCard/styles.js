import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/Responsive';
import Colors from '../../Constant/Colors';
import { fonts } from '../../Constant/Fonts';

export const styles = StyleSheet.create({
  card: {
    width: wp('20%'),
    backgroundColor: '#ded3f2',
    borderRadius: wp('3.2%'),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },

  iconContainer: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp('100%'),
  },

  labelText: {
    fontFamily: fonts.Parkinsans.medium,
    fontSize: 12,
    color: 'black',
    marginVertical: wp('0.1%'),
  },
  timeText: {
    fontFamily: fonts.Parkinsans.light,
    fontSize: 12,
    color: '#4A4A4A',
    marginVertical: wp('0.3%'),
  },
});
