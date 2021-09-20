import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { act } from 'react-test-renderer';
import { Play } from '../Play';

afterEach(cleanup);

it('Matches snapshot', async () => {
  jest.useFakeTimers();
  const snap = render(<Play />).toJSON();
  await act(async () => {});
  expect(snap).toMatchSnapshot();
});
