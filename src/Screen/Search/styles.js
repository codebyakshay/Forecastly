import { StyleSheet } from 'react-native';

import { hp, wp } from '../../utils/Responsive';
import { fonts } from '../../Constant/Fonts';

export const styles = StyleSheet.create({
  container: {
    paddingTop: hp('6.5%'),
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginHorizontal: wp('5%'),
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: wp('0.5%') },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  inputText: {
    color: '#333',
    fontSize: hp('2%'),
  },
  resultsContainer: {
    marginTop: 10,
    marginHorizontal: wp('5%'),
  },
  resultItem: {
    backgroundColor: '#fff',
    padding: hp('1.5%'),
    borderRadius: wp('2%'),
    marginBottom: hp('1%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cityText: {
    fontSize: hp('2.2%'),
    fontFamily: fonts.Parkinsans.regular,
    color: '#333',
  },
  countryText: {
    fontSize: hp('1.8%'),
    color: '#666',
    fontFamily: fonts.Montserrat.thin,
  },
  selectedCityContainer: {
    marginHorizontal: wp('5%'),
    marginTop: hp('2%'),
    padding: hp('1%'),
    backgroundColor: '#e6f7ff',
    borderRadius: wp('2%'),
  },
  selectedCityText: {
    fontSize: hp('2%'),
    color: '#007acc',
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: hp('1%'),
    color: '#007acc',
  },
});
