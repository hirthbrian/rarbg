import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

import Main from "./src/screens/Main";

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    }).then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
