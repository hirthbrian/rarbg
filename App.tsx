import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import Main from './src/screens/Main';

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    }).then(() => setFontLoaded(true));
  }, [])

  if (!fontLoaded) return null;

  return <Main />;
};

export default App;
