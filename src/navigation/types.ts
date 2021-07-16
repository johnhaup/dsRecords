import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum LaunchScreens {
  SPINNING_RECORD = 'SPINNING_RECORD',
  TAB_NAVIGATOR = 'TAB_NAVIGATOR',
}

export type ScreenParams = {
  [LaunchScreens.SPINNING_RECORD]: undefined;
  [LaunchScreens.TAB_NAVIGATOR]: undefined;
};

export type NavigationProps<T extends keyof ScreenParams> = {
  navigation: StackNavigationProp<ScreenParams, T>;
  route: RouteProp<ScreenParams, T>;
};
