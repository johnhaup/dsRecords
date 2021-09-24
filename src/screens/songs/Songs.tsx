import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SCREEN_WIDTH } from '../../constants/layout';

export const Songs = () => {
  const fetchSongs = async () => {
    try {
      const snapshot = await firestore().collection('songlist').get();
      const songs = snapshot.docs.map((doc) => doc.data());
      console.log(songs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        testID={'@Songs/ScrollView'}
        horizontal
        pagingEnabled>
        <View style={styles.page} />
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
