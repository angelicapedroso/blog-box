import {
  getAuth,
  createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  updateProfile,
  // signOut,
} from 'firebase/auth';

import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import db from '../firebase/config';

const useAuthentication = () => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfCancelled = () => {
    if (cancelled) return true;
    return false;
  };

  const createUser = async (data) => {
    checkIfCancelled();
    setLoading(true);
    setErrors(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, {
        displayName: data.name,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes('Password')) {
        systemErrorMessage = 'A senha precisa ter no mínimo 6 caracteres';
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado';
      } else {
        systemErrorMessage = 'Ocorreu um error, por favor tente novamente mais tarde';
      }

      setLoading(false);
      setErrors(systemErrorMessage);
    }

    return null;
  };

  useEffect(() => () => setCancelled(true), []);

  return {
    auth,
    createUser,
    errors,
    loading,
  };
};

export default useAuthentication;
