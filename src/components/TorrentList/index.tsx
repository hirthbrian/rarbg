import React from "react";
import { FlatList } from "react-native";

import TorrentItem from "./components/Item";
import { Props } from "./components/Item/types";
import { TorrentListType } from "./types";
import { Separator } from "./styles";

const TorrentList = ({ items }: TorrentListType) => {
  const renderItem = ({ item }: { item: Props }) => (
    <TorrentItem
      title={item.title}
      size={item.size}
      magnetLink={item.magnetLink}
      category={item.category}
    />
  );

  const renderSeparator = () => <Separator />;

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      keyExtractor={(k) => k.title}
    />
  );
};

export default TorrentList;
