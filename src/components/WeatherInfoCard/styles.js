import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/Responsive';
import Colors from '../../Constant/Colors';
import { fonts } from '../../Constant/Fonts';

export const styles = StyleSheet.create({
  card: {
    width: wp('44%'),
    backgroundColor: '#ded3f2',
    borderRadius: wp('3.2%'),
    flexDirection: 'row',
  },

  iconContainer: {
    height: hp('3.7%'),
    width: wp('8.5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: wp('100%'),
  },

  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textConatiner: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  labelText: {
    fontFamily: fonts.Parkinsans.medium,
    fontSize: 14,
    color: 'black',
    marginVertical: wp('0.1%'),
  },

  labelValue: {
    fontFamily: fonts.Parkinsans.light,
    fontSize: 12,
    color: '#4A4A4A',
    marginVertical: wp('0.3%'),
  },

  changeIndicator: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    bottom: 10,
    right: wp('-20%'),
  },
});
