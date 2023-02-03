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

  // const onSearchEndEditing = async (text) => {
  //   try {
  //     const response = await yelp.get('/search?location=milan', {
  //       term: text,
  //       limit: 1,
  //     });
  //     setResults(response.data.businesses);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

  const onSearchEndEditing = () => {};

  React.useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await yelp.get('/search?location=milan', {
          term: 'pasta',
          limit: 1,
        });
        setResults(response.data.businesses);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchResults();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Search onSearchEndEditing={onSearchEndEditing} />
      <RestaurantList list={results} />
      <Text>We have found {results.length}</Text>
      {error && <Text>{error}</Text>}
      <Button title='Go to details' onPress={onButtonPress} />
    </View>
  );
}

export default Home;
