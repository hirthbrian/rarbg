import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import Torrent, { TorrentType } from './Torrent';
import { Color } from '../utils';

const styles = StyleSheet.create({
  separator: {
    width: 80,
    marginLeft: 15,
    backgroundColor: Color.LightBlack,
    height: StyleSheet.hairlineWidth,
  },
});

function TorrentList({ items }: TorrentListType) {
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
}

interface TorrentListType {
  items: TorrentType[],
}

export default TorrentList;
