import firestore from '@react-native-firebase/firestore';
import { useCallback, useState } from 'react';
import { FirestoreSong } from '../../../types';

export const useSongs = () => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState<FirestoreSong[]>([]);

  const fetchSongs = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await firestore()
        .collection<FirestoreSong>('songlist')
        .get();
      const fetched = snapshot.docs.map((doc) => doc.data());
      setSongs(fetched);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return { fetchSongs, songs, loading };
};
