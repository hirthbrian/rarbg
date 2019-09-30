import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Search from '../../components/Search';
import Torrents from '../../components/Torrents';
import styles from './styles';

function Category() {
  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
      />
      <Search />
      <Torrents />
    </SafeAreaView>
  )
};

export default Category;
