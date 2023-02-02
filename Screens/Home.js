import React from 'react';
import { Button, Text, View } from 'react-native';
import Search from './Search';

function Home({ navigation, route }) {
  const [count, setCount] = React.useState(0);
  const { restaurant } = route.params;
  const onButtonPress = () => {
    navigation.navigate('Detail');
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title='hello' />
      ),
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Search />
      <Text>Welcome to {restaurant}</Text>
      <Text>Count: {count}</Text>
      <Button title='Go to details' onPress={onButtonPress} />
    </View>
  );
}

export default Home;
