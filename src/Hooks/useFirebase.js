import FirebaseInitialize from "../Firebase/Firebase.initialize";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseInitialize();

export const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setUserLocalStorage(user);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        setUser({});
        // User is signed out
        // ...
      }
    });
  }, []);
  /* set user in localstorage */
  const setUserLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  /* Register user using email and password */
  const emailAndPasswordRegister = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        verifyEmail();
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {});
  };
  /* user can sign in usin his google account */
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  /* Sign In user using email and password */
  const signinUserUsingPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutFromAccount = () => {
    signOut(auth)
      .then(() => {
        setUserLocalStorage({});
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    emailAndPasswordRegister,
    user,
    setUser,
    signinUserUsingPassword,
    signOutFromAccount,
    signInUsingGoogle,
  };
};
