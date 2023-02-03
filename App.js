import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image, StyleSheet } from 'react-native';
import Detail from './src/Screens/Detail';
import Home from './src/Screens/Home';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('./assets/favicon.png')}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: { backgroundColor: 'green' },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 20,
          },
          headerRight: () => (
            <Button color='white' title='hello' onPress={() => alert('Hey!')} />
          ),
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
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
