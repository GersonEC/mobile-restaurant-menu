import { useNavigation } from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
const RestaurantCard = ({ item }) => {
  const restaurant = item.item;
  const navigation = useNavigation();

  const onRestaurantCardPress = () => {
    navigation.navigate('RestaurantDetail', {
      itemId: restaurant.id,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onRestaurantCardPress}>
      <View style={styles.card}>
        <Image
          style={{ height: 130, width: 230 }}
          source={{ uri: restaurant.image_url }}
        />
        <Text style={styles.city}>{restaurant.location.city}</Text>
        <View style={styles.rating}>
          <Text>{restaurant.rating} Stars,</Text>
          <Text>{restaurant.price}</Text>
          <Text>{restaurant.review_count} Reviews</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  city: {
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 3,
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
  },
});
export default RestaurantCard;
