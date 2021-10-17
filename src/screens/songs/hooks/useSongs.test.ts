import { act, renderHook } from '@testing-library/react-hooks';
import { useSongs } from './useSongs';

test('should toggle loading with fetch songs', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useSongs());

  expect(result.current.loading).toBe(false);
  act(() => {
    result.current.fetchSongs();
  });
  expect(result.current.loading).toBe(true);
  await waitForNextUpdate();
  expect(result.current.loading).toBe(false);
});

test('should set songs with fetch songs', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useSongs());

  expect(result.current.songs).toStrictEqual([]);
  act(() => {
    result.current.fetchSongs();
  });
  await waitForNextUpdate();
  expect(result.current.songs).toHaveLength(1);
});
