import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import {
  advanceAnimationByTime,
  withReanimatedTimer,
} from 'react-native-reanimated/src/reanimated2/jestUtils';
import { act } from 'react-test-renderer';
import { RootNavigatorParamList } from '../../../navigation/types';
import { SpinningRecord } from '../SpinningRecord';

afterEach(cleanup);

const mockNavProps = {} as BottomTabScreenProps<
  RootNavigatorParamList,
  'SpinningRecord'
>;

it('Matches snapshot', async () => {
  jest.useFakeTimers();
  const snap = render(<SpinningRecord {...mockNavProps} />).toJSON();
  await act(async () => {});
  expect(snap).toMatchSnapshot();
});

it('Spins record 360 deg every 2 seconds with linear easing', () => {
  withReanimatedTimer(async () => {
    const { getByTestId } = render(<SpinningRecord {...mockNavProps} />);
    const view = getByTestId('animated-view');
    expect(view.props.style.transform[0].rotate).toBe('0deg');
    advanceAnimationByTime(1000);
    expect(view.props.style.transform[0].rotate).toBe('180deg');
    advanceAnimationByTime(1000);
    expect(view.props.style.transform[0].rotate).toBe('360deg');
  });
});
