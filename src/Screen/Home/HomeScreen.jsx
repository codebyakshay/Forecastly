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
import { useQuery } from '@tanstack/react-query';
const API_KEY = '34845b794cf1314c2fc94b09b248acc8'; // Replace with your OpenWeather API key

export default function HomeScreen() {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState('Today');
  const lat = 48.8575;
  const lon = 2.3514;

  const {
    data: weatherDetails,
    isLoading: weatherIsLoading,
    error: weatherError,
  } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      ).then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      }),
  });

  const {
    data: forecastDetails,
    isLoading: forecastIsLoading,
    error: forecastError,
  } = useQuery({
    queryKey: ['forecast', lat, lon],
    queryFn: () =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      ).then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      }),
  });

  if (weatherIsLoading) {
    return <Text>Loading...</Text>;
  }

  if (weatherError) {
    return <Text>Error fetching data</Text>;
  }

  if (forecastIsLoading) {
    return <Text>Loading...</Text>;
  }

  if (forecastError) {
    return <Text>Error fetching data</Text>;
  }

  return (
    <>
      <StatusBar hidden />

      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.placeContainer}>
            <View style={{ width: widthPercentageToDP('55%') }}>
              <Text style={styles.textStyle}>{weatherDetails?.name}</Text>
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
            <WeatherCard data={weatherDetails} forecast={forecastDetails} />
          </View>

          <View>
            <WeatherSummary weather={weatherDetails} />
          </View>
        </View>

        {/* {console.log('/forecast', forecastDetails)} */}

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
              forecast={forecastDetails}
              weather={weatherDetails}
            />
          ) : null}
        </View>
      </View>
    </>
  );
}
