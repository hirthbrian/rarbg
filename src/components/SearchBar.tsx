import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Color } from '../utils';
import Glass from './icons/Glass';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomColor: Color.LightBlack,
    borderBottomWidth: 1,
  },
  searchBarContainer: {
    padding: 15,
    paddingVertical: 12,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.LightBlack,
  },
  searchBarText: {
    flex: 1,
    fontSize: 18,
    color: Color.White,
    paddingHorizontal: 10,
    fontFamily: 'inter-regular',
  },
});

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
        <Glass
          width={15}
          height={15}
          color={Color.White}
        />
        <TextInput
          autoFocus
          onChangeText={onChangeText}
          value={text}
          style={styles.searchBarText}
          placeholderTextColor="#999999"
          placeholder="Search by title..."
          keyboardAppearance="dark"
          onSubmitEditing={() => onSearch(text)}
        />
        {isLoading && (
          <ActivityIndicator color={Color.White} />
        )}
      </View>
    </View>
  );
}

interface SearchBarType {
  onSearch: (text: string) => {},
  isLoading: boolean,
}

export default SearchBar;
