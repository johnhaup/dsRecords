import { compact, intersection } from 'lodash';
import get from 'lodash/get';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { Color, COLOR_PALETTE } from '../../styles';

type DefinedTextChild = string | JSX.Element;

type TextChild = DefinedTextChild | DefinedTextChild[] | undefined | null;
type ComponentProps = {
  children: TextChild;
  center?: boolean;
  underline?: boolean;
  upper?: boolean;
};

const TEXT_CONFIGS = ['heading1Bold', 'bodyMMedium'] as const;
type TextConfigsTuple = typeof TEXT_CONFIGS;
export type TextConfigs = TextConfigsTuple[number];

type TextConfigsProps = {
  [key in TextConfigs]: string;
};

type ColorProps = {
  [key in Color]: string;
};

type Props = ComponentProps & ColorProps & TextConfigsProps & TextProps;

const styleSheetProps = [
  ...TEXT_CONFIGS,
  ...COLOR_PALETTE,
  'center',
  'underline',
  'upper',
];

export const MainText = ({ children, style, ...rest }: Props) => {
  if (!children) {
    return null;
  }

  const flaggedStyles = pick(rest, styleSheetProps);
  const dynamicStyleKeys: string[] = compact(Object.keys(flaggedStyles));

  if (intersection(dynamicStyleKeys, TEXT_CONFIGS).length > 1) {
    console.warn(
      'More than one font prop used in MainText.  This will result in a merging of font styles and is not recommended.',
    );
  }

  const dynamicStyleSheets: TextStyle[] = compact(
    dynamicStyleKeys.map((key) => get(styles, key, null)),
  );
  const textStyles = compact([...dynamicStyleSheets, style]);

  const textComponentProps = omit(rest, styleSheetProps);

  return (
    <Text style={textStyles} {...textComponentProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  upper: {
    textTransform: 'uppercase',
  },
  heading1Bold: {
    fontFamily: 'DIN-Bold',
    fontSize: 50,
    lineHeight: 62,
    letterSpacing: 2,
  },
  bodyMMedium: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.2,
  },
});
