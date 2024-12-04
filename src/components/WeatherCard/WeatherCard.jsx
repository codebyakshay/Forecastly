import React from 'react';
import { Image, Text, View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { fonts } from '../../Constant/Fonts';
import { styles } from './styles';

const WeatherCard = ({ data, forecast }) => {
  const iconCode = data?.weather?.[0]?.icon;

  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@4x.png`
    : null;

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.degreeText}>
              {data?.main?.temp ? Math.round(data.main.temp) : '--'}
              <Text
                style={{
                  fontSize: 90,
                  color: 'white',
                  fontFamily: fonts.Montserrat.light,
                }}>
                °
              </Text>
            </Text>
          </View>
          <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <Text
              style={[styles.feelLikeText, { marginLeft: -20, marginTop: 40 }]}>
              Feels Like{' '}
              {data?.main?.feels_like ? Math.round(data.main.feels_like) : '--'}
              °
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: -50,
            bottom: 0,
          }}>
          <View>
            {iconUrl ? (
              <Image
                source={{ uri: iconUrl }}
                style={{
                  width: wp('50%'),
                  height: wp('50%'),
                  marginBottom: 10,
                }}
                resizeMode="contain"
              />
            ) : null}
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              margin: 5,
              backgroundColor: 'rgba(126, 87, 194, 0.4)',
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.conditionText}>
              {data?.weather?.[0]?.description
                ? data.weather[0].description.charAt(0).toUpperCase() +
                  data.weather[0].description.slice(1)
                : '--'}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default WeatherCard;
