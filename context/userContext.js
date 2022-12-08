import { createContext, useState, useEffect, useCallback } from "react";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const UserContext = createContext(""); // Très important de mettre une value empty au lieu de null ou undefined, sinon bug

export default function UserContextProvider(props) {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      currentUser ? console.log(currentUser) : console.log("Disconnected");
      setLoadingData(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ signIn, signUp, currentUser }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
