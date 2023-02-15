import { Image, StyleSheet, Text, View } from 'react-native';

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <View>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Image
        style={{ height: 200, width: 300 }}
        source={{ uri: restaurant.image_url }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 24,
    marginBottom: 8,
  },
});
export default RestaurantDetail;
