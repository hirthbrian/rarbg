import React, { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Color } from '../utils';

const icon = require('../assets/glass.png');

function SearchBar({
  onSearch,
  isLoading,
}: SearchBarType) {
  const [text, onChangeText] = useState('');

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.searchBarContainer}
      >
        <Image
          source={icon}
          style={styles.icon}
        />
        <TextInput
          autoFocus
          onChangeText={onChangeText}
          value={text}
          style={styles.searchBarText}
          placeholderTextColor="#999999"
          placeholder="Search by title"
          keyboardAppearance="dark"
          onSubmitEditing={() => onSearch(text)}
        />
        {isLoading && (
          <ActivityIndicator color="#CCCCCC" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchBarContainer: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Color.MediumGrey,
  },
  searchBarText: {
    flex: 1,
    fontSize: 18,
    color: Color.LightGrey,
    paddingHorizontal: 10,
  },
  icon: {
    tintColor: Color.LightGrey,
    width: 20,
    height: 20,
  },
});

interface SearchBarType {
  onSearch: (text: string) => {},
  isLoading: boolean,
};

export default SearchBar;
