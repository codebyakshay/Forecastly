import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/Home/HomeScreen';
import SearchScreen from '../Screen/Search/SearchScreen';

const Stack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false, // Hide header for HomeScreen
      },
    },
    Search: {
      screen: SearchScreen,
      options: {
        headerShown: true, // Show header for SearchScreen
        title: 'Search', // Set title for SearchScreen
      },
    },
  },
  screenOptions: {
    headerStyle: {
      backgroundColor: '#6200ee',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    animation: 'slide_from_left',
    headerTitleAlign: 'center',
    gestureEnabled: true,
    contentStyle: {
      backgroundColor: '#f8f9fa',
    },
  },
});

const Navigation = createStaticNavigation(Stack, {
  initialRouteName: 'Home', // Set the initial route to Home
});

export default Navigation;
