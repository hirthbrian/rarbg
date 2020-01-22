import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import Torrent, { TorrentType } from './Torrent';
import { Color } from '../utils';

function Torrents({ items }: TorrentsType) {
  const renderItem = ({ item }: { item: TorrentType }) => (
    <Torrent
      title={item.title}
      size={item.size}
      magnetLink={item.magnetLink}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}
      keyExtractor={k => k.title}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: Color.DarkGrey,
    marginLeft: 15,
    height: StyleSheet.hairlineWidth,
  },
});

interface TorrentsType {
  items: TorrentType[],
};

export default Torrents;
