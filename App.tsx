import React from 'react';
import * as Font from 'expo-font';

import Home from './src/screens/Home';

class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;

    if (!fontLoaded) return null;

    return <Home />;
  };
};

export default App;
