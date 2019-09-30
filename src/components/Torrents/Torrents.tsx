import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';

import Torrent from './Torrent'
import styles from './styles';

type TorrentProps = {
  title: string,
  category: string,
  download: string,
  seeders: number,
  leechers: number,
  size: number,
};

const renderItem = ({ item, index }: { item: TorrentProps, index: number }) => (
  <Torrent
    title={item.title}
    category={item.category}
    link={item.download}
    ratio={(item.seeders * 100) / (item.seeders + item.leechers)}
    size={item.size}
    evenIndex={index % 2 === 0}
  />
);

function Torrents({ torrents }: { torrents: Array<TorrentProps> }) {
  console.log('torrents', torrents)
  return (
    <FlatList
      data={torrents}
      renderItem={renderItem}
      keyExtractor={(k) => k.title}
    />
  );
};

export default Torrents;
