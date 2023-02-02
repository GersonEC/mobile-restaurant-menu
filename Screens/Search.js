import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Search = () => {
  const [text, setText] = React.useState('');

  const onTextChange = (newText) => setText(newText);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder='Search restaurant'
        value={text}
        onChange={onTextChange}
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
    borderWidth: '2px',
    borderColor: 'grey',
    padding: 8,
    borderRadius: 8,
    height: 40,
    fontSize: 16,
  },
});

export default Search;
