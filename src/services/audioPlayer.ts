import { Player } from '@react-native-community/audio-toolkit';
import { Platform } from 'react-native';

const mp3 = Platform.OS === 'ios' ? 'bensound-punky.mp3' : 'bensound_punky.mp3';

export const audioPlayer = new Player(mp3);
