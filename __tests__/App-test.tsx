import { cleanup, render } from '@testing-library/react-native/pure';
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../App';

afterEach(cleanup);

it('Renders App', () => {
  render(<App />);
});

it('Matches snapshot', () => {
  jest.useFakeTimers();
  const snap = renderer.create(<App />);
  expect(snap).toMatchSnapshot();
});
