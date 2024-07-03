
import { StyleSheet, Text, View,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen 
      name="Home"
      component={HomeScreen}
      
      />

      <Stack.Screen 
      name="Cart"
      component={CartScreen}
      
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    backgroundColor: 'plum',
    borderWidth:1,
    width:300,
    height:200,
    alignSelf:'center',
    marginTop: 50,

  },

  

});
