import React, { cloneElement } from 'react';
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../../styles';
import { Spacer } from './Spacer';

const Icon = ({
  icon,
  rightAlign = false,
}: {
  icon?: JSX.Element;
  rightAlign?: boolean;
}) =>
  icon ? (
    <View style={styles.row}>
      <Spacer w={rightAlign ? 16 : 0} />
      {cloneElement(icon)}
      <Spacer w={rightAlign ? 0 : 16} />
    </View>
  ) : null;

interface Props extends Omit<PressableProps, 'style'> {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
}

export const MainButton = ({
  text,
  leftIcon,
  rightIcon,
  style = {},
  pressedStyle = {},
  ...rest
}: Props) => {
  const pressableStyle = ({ pressed }: PressableStateCallbackType) => [
    styles.button,
    styles.row,
    pressed ? [{ opacity: 0.8 }, pressedStyle] : {},
    style,
  ];

  return (
    <Pressable style={pressableStyle} {...rest}>
      <Icon icon={leftIcon} />
      <Text style={styles.text}>{text}</Text>
      <Icon icon={rightIcon} rightAlign />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: colors.cityLights,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: colors.draculaOrchid,
  },
});
