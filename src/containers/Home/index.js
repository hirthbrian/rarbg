import React from 'react';
import {
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Search from '../../components/Search';
import TorrentList from '../../components/TorrentList';
import styles from './styles';

export default () => (
  <SafeAreaView
    style={styles.container}
  >
    <StatusBar
      barStyle="light-content"
    />
    <Search />
    <TorrentList />
  </SafeAreaView>
);
