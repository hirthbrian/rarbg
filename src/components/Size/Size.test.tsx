import React from 'react';
import renderer from 'react-test-renderer';

import Size from './Size';

describe('<Size />', () => {
  it('renders correcly', () => {
    const tree = renderer.create(<Size size={102400} />);
    expect(tree).toMatchSnapshot();
  });
});
