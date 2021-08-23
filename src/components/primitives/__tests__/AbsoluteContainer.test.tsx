import { cleanup, render } from '@testing-library/react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AbsoluteContainer } from '../AbsoluteContainer';

afterEach(cleanup);

describe('Pointer Events', () => {
  it('Defaults to pointerEvents box-none', () => {
    const { getByTestId } = render(<AbsoluteContainer />);
    const view = getByTestId('absolute-container');
    expect(view.props.pointerEvents).toEqual('box-none');
  });

  it('Sets pointerEvents to prop value', () => {
    const { getByTestId } = render(
      <AbsoluteContainer pointerEvents={'none'} />,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.pointerEvents).toEqual('none');
  });
});

describe('Position props', () => {
  it('Defaults to StyleSheet.absoluteFill', () => {
    const { getByTestId } = render(<AbsoluteContainer />);
    const view = getByTestId('absolute-container');
    expect(view.props.style).toHaveLength(1);
    expect(view.props.style[0]).toBe(StyleSheet.absoluteFill);
  });

  it('Sets boolean position props to zero', () => {
    const { getByTestId } = render(<AbsoluteContainer top bottom left right />);
    const view = getByTestId('absolute-container');
    expect(view.props.style).toEqual([
      {
        position: 'absolute',
      },
      {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    ]);
  });

  it('Sets number position props to prop value', () => {
    const { getByTestId } = render(
      <AbsoluteContainer bottom left={16} right={16} />,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.style[1]).toEqual({
      bottom: 0,
      left: 16,
      right: 16,
    });
  });
});

describe('Style props', () => {
  it('Centers children when center prop is true', () => {
    const { getByTestId } = render(<AbsoluteContainer center />);
    const view = getByTestId('absolute-container');
    expect(view.props.style).toEqual([
      StyleSheet.absoluteFill,
      {
        justifyContent: 'center',
        alignItems: 'center',
      },
    ]);
  });

  it('Adds style prop as last stylesheet in style array', () => {
    const { getByTestId } = render(
      <AbsoluteContainer center style={{ backgroundColor: 'pink' }} />,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.style).toEqual([
      StyleSheet.absoluteFill,
      {
        justifyContent: 'center',
        alignItems: 'center',
      },
      { backgroundColor: 'pink' },
    ]);
  });
});

describe('Children', () => {
  it('Renders with undefined children', () => {
    const { getByTestId } = render(<AbsoluteContainer />);
    const view = getByTestId('absolute-container');
    expect(view.props.children).toBeUndefined();
  });

  it('Renders with null children', () => {
    const { getByTestId } = render(
      <AbsoluteContainer>{null}</AbsoluteContainer>,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.children).toBeNull();
  });

  it('Renders with one child', () => {
    const { getByTestId } = render(
      <AbsoluteContainer>
        <View />
      </AbsoluteContainer>,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.children).toEqual(<View />);
  });

  it('Renders with multiple children', () => {
    const { getByTestId } = render(
      <AbsoluteContainer>
        <View />
        <View />
        <View />
      </AbsoluteContainer>,
    );
    const view = getByTestId('absolute-container');
    expect(view.props.children).toHaveLength(3);
  });
});
