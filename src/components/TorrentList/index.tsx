import React from 'react';
import {
  FlatList,
} from 'react-native';

import TorrentItem from './components/Item';
import { TorrentItemType } from './components/Item/types';
import { TorrentListType } from './types';
import { Separator } from './styles';

function TorrentList({ items }: TorrentListType) {
  const renderItem = ({ item }: { item: TorrentItemType }) => (
    <TorrentItem
      title={item.title}
      size={item.size}
      magnetLink={item.magnetLink}
      category={item.category}
      leechers={item.leechers}
      seeders={item.seeders}
      pubdate={item.pubdate}
    />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={k => k.title}
    />
  );
}

export default TorrentList;
