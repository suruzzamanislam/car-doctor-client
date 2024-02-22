import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const authContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    console.log('fire handle mood');
    setMode(!mode);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubcrive = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };

      setLoading(false);
      // JWT
      if (currentUser) {
        axios
          .post('http://localhost:5000/jwt', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log('token responce: ', res.data);
          });
      } else {
        axios
          .post('http://localhost:5000/logout', loggedUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      }
    });

    return () => {
      return unsubcrive();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOut,
    loading,
    mode,
    handleMode,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};
