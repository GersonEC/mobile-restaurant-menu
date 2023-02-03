import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';

const RestaurantList = ({ list }) => {
  const restaurant = list.length > 0 && list[0];
  console.log({ restaurant });
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text>{restaurant.name}</Text>
        <Image
          style={{ height: 150, width: 200, resizeMode: 'contain' }}
          source={{ uri: restaurant.image_url }}
        />
        <Text>{restaurant.location.city}</Text>
        <Text>{restaurant.rating} Stars</Text>
        <Text>{restaurant.review_count} Reviews</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantList;
