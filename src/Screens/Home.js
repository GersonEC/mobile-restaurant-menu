import React from 'react';
import { Button, Text, View } from 'react-native';
import yelp from '../api/yelp';
import RestaurantList from './RestaurantList';
import Search from './Search';

function Home({ navigation }) {
  const [results, setResults] = React.useState([]);
  const [error, setError] = React.useState(null);

  const onButtonPress = () => {
    navigation.navigate('Detail');
  };

  const onSearchEndEditing = async (text) => {
    try {
      const response = await yelp.get('/search', {
        location: 'San Francisco',
        term: text,
        limit: 50,
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Search onSearchEndEditing={onSearchEndEditing} />
      <RestaurantList />
      <Text>We have found {results.length}</Text>
      {error && <Text>{error}</Text>}
      <Button title='Go to details' onPress={onButtonPress} />
    </View>
  );
}

export default Home;
