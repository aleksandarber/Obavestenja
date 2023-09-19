import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack'
import Main from './app/screens/Main';
import Settings from './app/screens/Settings';

export default function App({navigation}) {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Obavestenja'
          component={Main}
          options={({navigation})=>({
            title: 'Obavestenja',
            headerStyle: {
              backgroundColor: '#65C8FF',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              marginLeft: 10,
              fontSize: 22,
              textTransform: 'uppercase',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image
                  style={{ width: 25, height: 25, marginRight:25 }}
                  source={require('./images/cog-wheel.png')}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name='Settings'
          component={Settings}
          options={{
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#65C8FF',
              height: 100,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
              textTransform: 'uppercase',
            },
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LogoTitle({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate}>
      <Image
        style={{ width: 25, height: 25, marginRight:25 }}
        source={require('./images/cog-wheel.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
