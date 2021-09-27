import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useCallback, useEffect, useState } from 'react';
import { googleSignIn } from '../auth';

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const clearError = useCallback(() => {
    if (error) {
      setError(false);
    }
  }, [error, setError]);

  useEffect(() => {
    if (loading) {
      clearError();
    }
  }, [loading, clearError]);

  async function signIn<T>(signInFunction: () => Promise<T>) {
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
