import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import TorrentItem from '../TorrentItem'
import styles from './styles';

const renderItem = ({ item, index }) => (
  <TorrentItem
    title={item.title}
    category={item.category}
    link={item.download}
    ratio={(item.seeders * 100) / (item.seeders + item.leechers)}
    size={item.size}
    evenIndex={index % 2 == 0}
  />
);

export default ({ torrents }) => {
  return (
    <FlatList
      data={torrents}
      renderItem={renderItem}
      keyExtractor={k => k.title}
    />
  );
};
