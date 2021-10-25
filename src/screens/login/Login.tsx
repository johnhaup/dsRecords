import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainButton } from '../../components/primitives/MainButton';
import { GoogleG } from '../../components/svgs/GoogleG';
import { RootNavigatorParamList } from '../../navigation/types';
import { useSignIn } from '../../services/hooks/useSignIn';
import { colors } from '../../styles';

export const Login = ({
  navigation,
}: StackScreenProps<RootNavigatorParamList, 'Login'>) => {
  const { signInWithGoogle, loading } = useSignIn();

  const onAuthStateChanged = useCallback(
    (user: FirebaseAuthTypes.User | null) => {
      if (!user) {
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
      <MainButton
        leftIcon={<GoogleG />}
        disabled={loading}
        onPress={signInWithGoogle}
        text={'Sign In with Google'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: colors.electronBlue,
  },
});
