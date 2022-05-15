import React, { useState } from "react";
import { StatusBar } from "react-native";
import { RootSiblingParent } from "react-native-root-siblings";
import axios from "axios";

import SearchBar from "../../components/SearchBar";
import TorrentList from "../../components/TorrentList";
import { searchUrl } from "../../utils";
import { Container } from "./styles";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const onSearch = async (keyword: string) => {
    setLoading(true);

    axios
      .get(searchUrl, { params: { keyword } })
      .then(({ data }) => setResults(data))
      .finally(() => setLoading(false));
  };

  return (
    <RootSiblingParent>
      <Container>
        <StatusBar barStyle="light-content" />
        <SearchBar loading={loading} onSearch={onSearch} />
        <TorrentList items={results} />
      </Container>
    </RootSiblingParent>
  );
};

export default Main;
