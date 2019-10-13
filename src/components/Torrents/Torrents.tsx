import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import Torrent from '../Torrent';
import styles from './styles';
import { ITorrent } from '../../actions/types';

const renderItem = ({ item }: { item: ITorrent }) => (
  <Torrent
    title={item.title}
    size={item.size}
    magnetLink={item.magnetLink}
  />
);

const renderSeparator = () => <View style={styles.separator} />;

const Torrents = ({ items }: { items: ITorrent[] }) => (
  <FlatList
    data={items}
    renderItem={renderItem}
    ItemSeparatorComponent={renderSeparator}
    keyExtractor={k => k.title}
  />
);

export default Torrents;
