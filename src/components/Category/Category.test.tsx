import React from 'react';
import renderer from 'react-test-renderer';

import Category from './Category';

describe('<Category />', () => {
  it('renders correcly', () => {
    const tree = renderer.create(<Category name="test" />);
    expect(tree).toMatchSnapshot();
  })
});
