import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import Torrents from '../components/Torrents';
import { Color, searchUrl } from '../utils';

class Home extends React.Component {
  state = {
    isLoading: false,
    results: [],
  };

  onSearch = async (keyword: string) => {
    this.setState({ isLoading: true });

    try {
      const { data } = await axios.get(searchUrl, { params: { keyword } });

      if (data.error) {
        console.log(data.error);
      } else {
        console.log('data', data)
        this.setState({ results: data });
      }
    } catch (error) {
      console.log(error.message);
    }

    this.setState({ isLoading: false });
  }

  render() {
    const {
      isLoading,
      results,
    } = this.state;

    return (
      <SafeAreaView
        style={styles.container}
      >
        <StatusBar barStyle="light-content" />
        <SearchBar
          isLoading={isLoading}
          onSearch={this.onSearch}
        />
        <Torrents
          items={results}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.VeryDarkGrey,
  },
});

export default Home;
