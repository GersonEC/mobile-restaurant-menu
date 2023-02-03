import { Button, Text, View } from 'react-native';

//navigation and route are intrinsic props for all pages of React Navigation
function Detail({ navigation, route }) {
  const onButtonPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
      <Button title='Go to Home' onPress={onButtonPress} />
    </View>
  );
}

export default Detail;
