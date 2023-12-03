import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WeatherScreen from './src/screen/WeatherScreen';
import Header from './src/components/Header';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Weather' component={WeatherScreen} options={({ route }) => ({ headerShown: true, header: () => <Header selectedValue={route.params.selectedValue} /> })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

