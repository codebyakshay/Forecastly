import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useQuery } from '@tanstack/react-query';
import { useSetAtom } from 'jotai'; // Import useSetAtom from Jotai
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { cityAtom, coordsAtom } from '../../store/store';

const API_KEY = 'e165921261db4772aa67dc681fac4e2a';

const fetchCities = async (query) => {
  if (!query.trim()) return [];
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      query,
    )}&key=${API_KEY}`,
  );
  const data = await response.json();

  return data.results
    .map((item) => ({
      city:
        item.components.city ||
        item.components.town ||
        item.components.village ||
        null,
      country: item.components.country || 'Unknown Country', // Add country
      coords: {
        lat: item.geometry.lat,
        lng: item.geometry.lng,
      },
    }))
    .filter((item) => item.city !== null);
};

const SearchScreen = () => {
  const navigation = useNavigation();
  const setCity = useSetAtom(cityAtom); // Setter for cityAtom
  const setCoords = useSetAtom(coordsAtom); // Setter for coordsAtom
  const [search, setSearch] = useState('');

  const { data: filteredData = [], isFetching } = useQuery({
    queryKey: ['searchCities', search],
    queryFn: () => fetchCities(search),
    enabled: !!search.trim(),
    staleTime: 0,
    cacheTime: 10 * 60 * 1000,
  });

  const handleSelect = (city) => {
    setCity(city.city);
    setCoords(city.coords);
    setSearch(`${city.city}, ${city.country}`);
    Keyboard.dismiss();

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => handleSelect(item)}>
      <Text style={styles.cityText}>{item.city}</Text>
      <Text style={styles.countryText}>{item.country}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Search for a city..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchContainer}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          placeholderTextColor="#aaa"
          searchIcon={<Icon name="search" size={24} />}
          clearIcon={
            <TouchableOpacity onPress={() => setSearch('')}>
              <Icon name="close" size={24} />
            </TouchableOpacity>
          }
        />

        {isFetching && (
          <Text style={styles.loadingText}>Fetching results...</Text>
        )}
        <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          style={styles.resultsContainer}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
