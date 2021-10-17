import React, { useEffect } from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Spacer } from '../../components/primitives/Spacer';
import { FirestoreSong } from '../../types';
import { useSongs } from './hooks/useSongs';

export const Songs = () => {
  const { songs, fetchSongs } = useSongs();

  useEffect(() => {
    fetchSongs();
  }, [fetchSongs]);

  const renderSong = ({ item }: ListRenderItemInfo<FirestoreSong>) => {
    return (
      <View
        style={{
          alignSelf: 'stretch',
          padding: 16,
          borderRadius: 8,
          borderWidth: 1,
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const renderSeparator = () => <Spacer h={8} />;

  return (
    <View style={styles.container}>
      <Spacer statusBar safeTop />
      <FlatList
        style={styles.listContainer}
        testID={'@Songs/FlatList'}
        keyExtractor={(_, i) => `song_list_item_${i}`}
        data={songs}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={<Spacer h={16} />}
        ListFooterComponent={<Spacer h={16} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
