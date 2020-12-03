import React from 'react';
import {create} from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

import Header from '../../src/components/Header';

describe('Header', () => {
  it('matches the snapshot', () => {
    const screen = create(<Header label="foo" />).toJSON();
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly', () => {
    const screen = render(<Header label="foo" buttonCallback={() => {}} />);
    expect(screen.queryByText('foo')).toBeTruthy();
    expect(screen.queryByText('×')).toBeTruthy();
  });
  it('runs the button callback on click', () => {
    const mockCallback = jest.fn();
    const screen = render(<Header label="foo" buttonCallback={mockCallback} />);
    expect(mockCallback).not.toHaveBeenCalled();
    fireEvent.press(screen.getByText('×'));
    expect(mockCallback).toHaveBeenCalled();
  });
});
