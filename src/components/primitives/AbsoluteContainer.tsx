import { compact, get, isEmpty } from 'lodash';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { DynamicChildren } from '../../types';

interface Props {
  children?: DynamicChildren;
  top?: boolean | number;
  bottom?: boolean | number;
  left?: boolean | number;
  right?: boolean | number;
  center?: boolean;
  style?: ViewStyle | ViewStyle[];
  pointerEvents?: 'auto' | 'box-none' | 'none' | 'box-only';
}

const positionProps = ['top', 'bottom', 'left', 'right'];

export const AbsoluteContainer = ({
  children,
  pointerEvents = 'box-none',
  center,
  style,
  ...rest
}: Props) => {
  const positionProperties = positionProps.reduce((a, c) => {
    const value = get(rest, c, undefined);
    if (value) {
      return {
        ...a,
        [c]: typeof value === 'number' ? value : 0,
      };
    }
    return a;
  }, {});
  const centerStyles = center ? styles.center : null;

  const containerStyle = isEmpty(positionProperties)
    ? compact([StyleSheet.absoluteFill, centerStyles, style])
    : compact([styles.base, positionProperties, centerStyles, style]);

  return (
    <View
      style={containerStyle}
      pointerEvents={pointerEvents}
      testID={'absolute-container'}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: { position: 'absolute' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
