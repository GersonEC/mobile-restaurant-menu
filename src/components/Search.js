import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Search = ({ onSearchEndEditing }) => {
  const [text, setText] = React.useState('');

  // const onTextChange = (newText) => setText(newText);

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.search}
        placeholder='Search restaurant'
        value={text}
        onChangeText={setText}
        onEndEditing={() => onSearchEndEditing(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '80%',
  },
  search: {
    backgroundColor: 'lightgrey',
    padding: 8,
    borderRadius: 8,
    height: 40,
    fontSize: 16,
  },
});

export default Search;
