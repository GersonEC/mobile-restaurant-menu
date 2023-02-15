import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';
import Search from '../components/Search';
import RestaurantList from './RestaurantList';

function Home() {
  const [costEffectiveList, setCostEffectiveList] = React.useState([]);
  const [bitPricerList, setBitPricerList] = React.useState([]);
  const [bigSpenderList, setBigSpenderList] = React.useState([]);
  const [error, setError] = React.useState(null);

  const onSearchEndEditing = async (text) => {
    try {
      const response = await yelp.get('/search?location=madrid', {
        term: text,
        limit: 1,
      });
      const allList = response.data.businesses;
      const costEffective = allList.filter((item) => item.price === '€');
      const bitPricer = allList.filter((item) => item.price === '€€');
      const bigSpender = allList.filter((item) => item.price === '€€€');
      setCostEffectiveList(costEffective);
      setBitPricerList(bitPricer);
      setBigSpenderList(bigSpender);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <ScrollView>
      <Search onSearchEndEditing={onSearchEndEditing} />
      {costEffectiveList.length > 0 && (
        <View>
          <Text style={styles.heading}>Cost Effective</Text>
          <RestaurantList list={costEffectiveList} />
        </View>
      )}
      {bitPricerList.length > 0 && (
        <View>
          <Text style={styles.heading}>Bit Pricer</Text>
          <RestaurantList list={bitPricerList} />
        </View>
      )}
      {bigSpenderList.length > 0 && (
        <View>
          <Text style={styles.heading}>Big Spender</Text>
          <RestaurantList list={bigSpenderList} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
});
export default Home;
