import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import TorrentList from '../components/TorrentList';
import { RootSiblingParent } from 'react-native-root-siblings';
import { COLORS, searchUrl } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const onSearch = async (keyword: string) => {
    setLoading(true);

    try {
      const { data } = await axios.get(searchUrl, { params: { keyword } });

      if (data.error) {
        // console.log(data.error);
      } else {
        setResults(data);
      }
    } catch (error) {
      // console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <RootSiblingParent>
      <SafeAreaView
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <SearchBar
          loading={loading}
          onSearch={onSearch}
        />
        <TorrentList items={results} />
      </SafeAreaView>
    </RootSiblingParent>
  );
}

export default Home;
