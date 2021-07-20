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

export enum BounceStack {
  BOUNCE = 'BOUNCE',
}

export type BounceStackScreenParams = {
  [BounceStack.BOUNCE]: undefined;
};

export type BounceStackProps<T extends keyof BounceStackScreenParams> = {
  navigation: StackNavigationProp<BounceStackScreenParams, T>;
  route: RouteProp<BounceStackScreenParams, T>;
};

export enum SpinStack {
  SPIN = 'SPIN',
}

export type SpinStackScreenParams = {
  [SpinStack.SPIN]: undefined;
};

export type SpinStackProps<T extends keyof SpinStackScreenParams> = {
  navigation: StackNavigationProp<SpinStackScreenParams, T>;
  route: RouteProp<SpinStackScreenParams, T>;
};
