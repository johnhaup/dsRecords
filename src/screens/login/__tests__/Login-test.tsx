import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import { act } from 'react-test-renderer';
import { Login } from '../Login';

afterEach(cleanup);

it('Matches snapshot', async () => {
  jest.useFakeTimers();
  let props: any;
  const snap = render(<Login {...props} />).toJSON();
  await act(async () => {});
  expect(snap).toMatchSnapshot();
});
