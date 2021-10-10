import { act, renderHook } from '@testing-library/react-hooks';
import { useAudioPlayer } from '../useAudioPlayer';

test('should prepare the audio player', () => {
  const { result } = renderHook(() => useAudioPlayer());

  expect(result.current.loaded).toBe(false);

  act(() => {
    result.current.prepare();
  });

  expect(result.current.loaded).toBe(true);
});
