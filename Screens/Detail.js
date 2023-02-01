import { Button, Text, View } from 'react-native';

function Detail({ navigation }) {
  const onButtonPress = () => {
    navigation.navigate('Home');
  };
  const onPushPress = () => {
    navigation.push('Detail');
  };
  const onPopToTopPress = () => {
    navigation.popToTop();
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title='Go to Home' onPress={onButtonPress} />
      <Button title='Push' onPress={onPushPress} />
      <Button title='Pop to top' onPress={onPopToTopPress} />
    </View>
  );
}

export default Detail;
