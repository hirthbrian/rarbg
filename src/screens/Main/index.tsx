import React, { useState } from "react";
import { StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import axios from "axios";

import { SearchBar, Toast, TorrentList } from "../../components";
import { searchUrl } from "../../utils";
import { Container } from "./styles";
import { showToast } from "../../redux/features/toast/toastSlice";

const Main = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const onSearch = async (keyword: string) => {
    setLoading(true);

    axios
      .get(searchUrl, { params: { keyword } })
      .then(({ data }) => {
        if (data.length) {
          setResults(data);
        } else {
          dispatch(showToast("Nothing found..."));
        }
      })
      .catch(() => dispatch(showToast("Something went wrong...")))
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SearchBar loading={loading} onSearch={onSearch} />
      <TorrentList items={results} />
      <Toast />
    </Container>
  );
};

export default Main;
