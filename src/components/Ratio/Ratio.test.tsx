import React from 'react';
import renderer from 'react-test-renderer';

import Ratio from './Ratio';

describe('<Ratio />', () => {
  it('renders correcly', () => {
    const tree = renderer.create(<Ratio ratio={0.5} size={102400} />);
    expect(tree).toMatchSnapshot();
  });
});
