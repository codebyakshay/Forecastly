import React from 'react';
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/FontAwesome';
import { hp, wp } from '../../utils/Responsive';

const SearchScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search City..."
          onPress={(data, details = null) => {
            // console.log(data, details);
          }}
          query={{
            key: 'YOUR_GOOGLE_API_KEY',
            language: 'en',
          }}
          styles={{
            textInputContainer: styles.inputContainer,
            textInput: styles.inputText,
          }}
          fetchDetails
          enablePoweredByContainer={false}
          minLength={2}
          debounce={200}
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          predefinedPlacesAlwaysVisible={true}
          renderLeftButton={() => (
            <Icon name="search" size={20} color="#666" style={styles.icon} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp('6.5%'),
    flex: 1,
  },
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    borderRadius: wp('7%'),
    paddingHorizontal: wp('4%'),
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: wp('0.5%') },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginHorizontal: wp('5%'),
  },
  inputText: {
    color: '#333',
    fontSize: hp('2.1%'),
  },
  icon: {
    paddingLeft: wp('4%'),
  },
});

export default SearchScreen;
