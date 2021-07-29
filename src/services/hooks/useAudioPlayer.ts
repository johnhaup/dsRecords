import { useState } from 'react';
import { audioPlayer } from '../audioPlayer';

export const useAudioPlayer = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  const prepare = () => {
    audioPlayer.prepare(() => setLoaded(true));
  };

  const play = () => {
    audioPlayer.play();
  };

  const pause = () => {
    audioPlayer.pause();
  };

  const stop = () => {
    audioPlayer.stop();
  };

  const setSpeed = (speed: number) => {
    audioPlayer.speed = speed;
  };

  return {
    prepare,
    loaded,
    play,
    pause,
    stop,
    setSpeed,
  };
};
