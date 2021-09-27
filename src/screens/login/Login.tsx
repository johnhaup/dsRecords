import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GoogleG } from '../../components/svgs/GoogleG';
import { RootNavigatorParamList } from '../../navigation/types';
import { useSignIn } from '../../services/hooks/useSignIn';

export const Login = ({
  navigation,
}: StackScreenProps<RootNavigatorParamList, 'Login'>) => {
  const { signInWithGoogle } = useSignIn();

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      if (user) {
        navigation.navigate('Main');
      }
    },
    [navigation],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={signInWithGoogle}
        style={({ pressed }) => [
          { opacity: pressed ? 0.8 : 1 },
          styles.button,
        ]}>
        <GoogleG />
        <Text>Sign In with Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignSelf: 'stretch',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
