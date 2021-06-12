import { cleanup, render } from '@testing-library/react-native/pure';
import React from 'react';
import 'react-native';
import App from '../App';

afterEach(cleanup);

it('Matches snapshot', () => {
  const snap = render(<App />).toJSON();
  expect(snap).toMatchSnapshot();
});
