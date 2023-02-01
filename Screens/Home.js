import { Button, Text, View } from 'react-native';

function Home({ navigation }) {
  const onButtonPress = () => {
    navigation.navigate('Detail');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <Button title='Go to details' onPress={onButtonPress} />
    </View>
  );
}

export default Home;
