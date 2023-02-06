import { FlatList } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantList = ({ list }) => {
  return (
    <FlatList
      horizontal
      data={list}
      renderItem={(item) => <RestaurantCard item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RestaurantList;
