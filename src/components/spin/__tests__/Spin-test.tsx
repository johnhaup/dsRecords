import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { act } from 'react-test-renderer';
import { Spin } from '../Spin';

afterEach(cleanup);

it('Matches snapshot', async () => {
  jest.useFakeTimers();
  const snap = render(<Spin />).toJSON();
  await act(async () => {});
  expect(snap).toMatchSnapshot();
});
