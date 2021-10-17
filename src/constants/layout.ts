import { Dimensions, StatusBar } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const TAB_BAR_HEIGHT = 49;
export const ANDROID_MENU_BAR_HEIGHT =
  Dimensions.get('screen').height - Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
