import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Search from 'react-native-vector-icons/Feather';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import WeatherSummary from '../../components/WeatherSummary/WeatherSummary';
import CustomButton from '../../components/CustomButton/CustomButton';
import TodayDetailsTab from '../TodayDetailsTab/TodayDetailsTab';
import { fetchWeather, fetchForecast } from '../../api/weather';
import { useQuery } from '@tanstack/react-query';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('Today');
  const lat = 21.2514;
  const lon = 81.6296;

  // Query for current weather
  const weatherDetails = useQuery({
    queryKey: ['weather', { lat, lon }],
    queryFn: fetchWeather,
  });

  // Query for forecast
  const forecastDetails = useQuery({
    queryKey: ['forecast', { lat, lon }],
    queryFn: fetchForecast,
  });

  // Error handling
  if (weatherDetails.isError) {
    console.error('Error fetching weather data:', weatherDetails.error);
  }

  if (forecastDetails.isError) {
    console.error('Error fetching forecast data:', forecastDetails.error);
  }

  return (
    <>
      <StatusBar hidden />

      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.placeContainer}>
            <View style={{ width: widthPercentageToDP('40%') }}>
              <Text style={styles.textStyle}>
                {'Delhi'}, {'India'}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                width: widthPercentageToDP('30%'),
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
              onPress={() => {
                navigation.navigate('Search');
                console.log('pressed');
              }}>
              <Search
                name="search"
                size={widthPercentageToDP('8%')}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <View>
            <WeatherCard
              data={weatherDetails?.data}
              forecast={forecastDetails}
            />
          </View>

          <View>
            <WeatherSummary
              data={weatherDetails?.data}
              forecast={forecastDetails?.data}
            />
          </View>
        </View>

        {/* Footer with Segment Controller */}
        <View style={styles.footer}>
          <View style={styles.segmentController}>
            <CustomButton
              title="Today"
              isActive={activeButton === 'Today'}
              onPress={() => setActiveButton('Today')}
            />
            <CustomButton
              title="Tomorrow"
              isActive={activeButton === 'Tomorrow'}
              onPress={() => setActiveButton('Tomorrow')}
            />
            <CustomButton
              title="10 Days"
              isActive={activeButton === '10 Days'}
              onPress={() => setActiveButton('10 Days')}
            />
          </View>
          {activeButton == 'Today' ? (
            <TodayDetailsTab
              forecast={forecastDetails?.data}
              weather={weatherDetails?.data}
            />
          ) : null}
        </View>
      </View>
    </>
  );
}
