import { useHeaderHeight } from '@react-navigation/elements';
import { compact } from 'lodash';
import React from 'react';
import { StatusBar, View, ViewProps, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ANDROID_MENU_BAR_HEIGHT,
  TAB_BAR_HEIGHT,
} from '../../constants/layout';

interface Props extends ViewProps {
  flex?: boolean | number;
  height?: number;
  h?: number;
  width?: number;
  w?: number;
  dynamicHeight?: { min: number; max?: number };
  safeTop?: boolean;
  safeBottom?: boolean;
  androidMenu?: boolean;
  statusBar?: boolean;
  tabBar?: boolean;
  header?: boolean; // includes safeTop in height
  style?: ViewStyle;
}

export const Spacer = ({
  flex: injectedFlex,
  height = 0,
  h = 0,
  width = 0,
  w = 0,
  dynamicHeight,
  safeTop,
  safeBottom,
  androidMenu,
  statusBar,
  tabBar,
  header,
  style,
}: Props) => {
  const { top, bottom } = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();

  const flex = injectedFlex
    ? typeof injectedFlex === 'number'
      ? injectedFlex
      : 1
    : null;
  const propsWidth = w + width;
  const propsHeight = h + height;
  const safeHeight = (safeTop ? top : 0) + (safeBottom ? bottom : 0);
  const tabHeight = tabBar ? TAB_BAR_HEIGHT : 0;
  const statusHeight = statusBar ? StatusBar.currentHeight || 0 : 0;
  const totalHeight =
    propsHeight +
    safeHeight +
    tabHeight +
    statusHeight +
    (header && headerHeight ? headerHeight : 0) +
    (androidMenu ? ANDROID_MENU_BAR_HEIGHT : 0);
  const baseStyles = compact([
    { height: totalHeight, width: propsWidth },
    style,
  ]);
  const withFlex = flex ? [...baseStyles, { flex }] : baseStyles;
  const spacerStyles = dynamicHeight
    ? [
        ...withFlex,
        {
          minHeight: dynamicHeight.min,
          maxHeight: dynamicHeight.max,
          flex: 1,
        },
      ]
    : withFlex;

  return <View style={spacerStyles} pointerEvents={'box-none'} />;
};
