import { Text, View } from 'react-native';

const RestaurantDetail = ({ route }) => {
  const { itemId } = route.params;

  return (
    <View>
      <Text>Restaurant Detail, {itemId}</Text>
    </View>
  );
};

export default RestaurantDetail;
