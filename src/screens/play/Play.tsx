import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Bounce } from '../../components/bounce/Bounce';
import { Spin } from '../../components/spin/Spin';
import { SCREEN_WIDTH } from '../../constants/layout';

export const Play = () => {
  return (
    <View style={styles.container}>
      <Animated.ScrollView testID={'@Play/ScrollView'} horizontal pagingEnabled>
        <View style={styles.page}>
          <Bounce />
        </View>
        <View style={styles.page}>
          <Spin />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    width: SCREEN_WIDTH,
  },
});
