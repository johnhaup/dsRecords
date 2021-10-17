import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { act } from 'react-test-renderer';
import { Songs } from '../Songs';

afterEach(cleanup);

it('Matches snapshot', async () => {
  jest.useFakeTimers();
  const snap = render(<Songs />).toJSON();
  // Need these for state updates that occur in component
  await act(async () => {});
  await act(async () => {});
  expect(snap).toMatchSnapshot();
});
