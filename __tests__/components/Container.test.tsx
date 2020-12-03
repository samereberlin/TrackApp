import React from 'react';
import {create} from 'react-test-renderer';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import Container from '../../src/components/Container';

describe('Header', () => {
  it('matches the snapshot', () => {
    const screen = create(
      <Container>
        <Text>foo</Text>
      </Container>,
    ).toJSON();
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const screen = render(
      <Container>
        <Text>foo</Text>
      </Container>,
    );
    const content = screen.getByText('foo');
    expect(content.type).toBe(Text);
    expect(content.parent?.type).toBe('RCTSafeAreaView');
    expect(content.parent).toHaveStyle({flex: 1});
  });
  it('fills the available space', () => {
    const screen = render(
      <Container>
        <Text>foo</Text>
      </Container>,
    );
    expect(screen.getByText('foo').parent).toHaveStyle({flex: 1});
  });
  it('renders its children', () => {
    const screen = render(
      <Container>
        <Text>foo</Text>
        <Text>bar</Text>
      </Container>,
    );
    const contents = screen.getAllByText(/foo|bar/);
    expect(contents).toHaveLength(2);
    expect(contents[0].type).toBe(Text);
    expect(contents[0]).toHaveTextContent('foo');
    expect(contents[1].type).toBe(Text);
    expect(contents[1]).toHaveTextContent('bar');
  });
});
