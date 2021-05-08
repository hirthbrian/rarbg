import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { COLORS } from '../../utils';
import Glass from '../icons/Glass';
import { SearchBarType } from './types';

import {
  Container,
  SearchBarText,
  SearchBarContainer,
} from './styles';

function SearchBar({
  onSearch,
  loading,
}: SearchBarType) {
  const [text, onChangeText] = useState('');

  return (
    <Container>
      <SearchBarContainer>
        <Glass
          width={15}
          height={15}
          color={COLORS.white}
        />
        <SearchBarText
          autoFocus
          value={text}
          autoCorrect={false}
          returnKeyType="search"
          keyboardAppearance="dark"
          onChangeText={onChangeText}
          placeholder="Search Torrents"
          placeholderTextColor={COLORS.grey}
          onSubmitEditing={() => onSearch(text)}
        />
        {loading && <ActivityIndicator color={COLORS.white} />}
      </SearchBarContainer>
    </Container>
  );
}

export default SearchBar;
