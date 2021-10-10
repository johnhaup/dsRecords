import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useState } from 'react';
import { googleSignIn } from '../auth';

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function signIn<T>(signInFunction: () => Promise<T>) {
    if (error) {
      setError(false);
    }

    setLoading(true);
    try {
      await signInFunction();
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  const signInWithGoogle = () =>
    signIn<FirebaseAuthTypes.UserCredential>(googleSignIn);

  return {
    loading,
    error,
    signInWithGoogle,
  };
}
