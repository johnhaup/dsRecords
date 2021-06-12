import { cleanup, render } from '@testing-library/react-native/pure';
import React from 'react';
import 'react-native';
import {
  advanceAnimationByTime,
  withReanimatedTimer,
} from 'react-native-reanimated/src/reanimated2/jestUtils';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { SpinningRecord } from '../SpinningRecord';

afterEach(cleanup);

it('Spins record 360 deg every 2 seconds with linear easing', () => {
  withReanimatedTimer(async () => {
    const { getByTestId } = render(<SpinningRecord />);
    const view = getByTestId('animated-view');
    expect(view.props.style.transform[0].rotate).toBe('0deg');
    advanceAnimationByTime(1000);
    expect(view.props.style.transform[0].rotate).toBe('180deg');
    advanceAnimationByTime(1000);
    expect(view.props.style.transform[0].rotate).toBe('360deg');
  });
});

it('Matches snapshot', () => {
  jest.useFakeTimers();
  const snap = renderer.create(<SpinningRecord />);
  expect(snap).toMatchSnapshot();
});
