import { act, renderHook } from '@testing-library/react-hooks';
import { useSignIn } from '../useSignIn';

test('should toggle loading with google sign in', async () => {
  jest.mock('@react-native-firebase/auth', () => ({
    signInWithCredential: () => setTimeout(() => Promise.resolve(), 2000),
  }));
  const { result, waitForNextUpdate } = renderHook(() => useSignIn());

  expect(result.current.loading).toBe(false);
  act(() => {
    result.current.signInWithGoogle();
  });
  expect(result.current.loading).toBe(true);
  await waitForNextUpdate({ timeout: 2000 });
  expect(result.current.loading).toBe(false);
});

// TODO Can't get mock of signInWithCredential to trigger catch
// test('should set error when google sign in fails', async () => {
//   jest.mock('@react-native-firebase/auth', () => {
//     const auth = () => ({
//       signInWithCredential: Promise.reject(),
//     });
//     auth.GoogleAuthProvider = {
//       credential: jest.fn,
//     };

//     return auth;
//   });

//   const { result, waitForNextUpdate } = renderHook(() => useSignIn());

//   expect(result.current.error).toBe(false);
//   act(() => {
//     result.current.signInWithGoogle();
//   });
//   await waitForNextUpdate({ timeout: 2000 });
//   expect(result.current.error).toBe(true);
// });
