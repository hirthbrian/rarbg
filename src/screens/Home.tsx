import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import TorrentList from '../components/TorrentList';
import { Color, searchUrl } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.Black,
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      results: [],
    };
  }

  onSearch = async (keyword: string) => {
    this.setState({ isLoading: true });

    try {
      const { data } = await axios.get(searchUrl, { params: { keyword } });

      if (data.error) {
        // console.log(data.error);
      } else {
        this.setState({ results: data });
      }
    } catch (error) {
      // console.log(error.message);
    }

    this.setState({ isLoading: false });
  };

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
        <TorrentList
          items={results}
        />
      </SafeAreaView>
    );
  }
}

export default Home;
