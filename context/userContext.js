import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  createUser,
  onAuthStateChanged,
} from "firebase/auth";

// export const UserContext = createContext(""); // Très important de mettre une value empty au lieu de null ou undefined, sinon bug
export const userContext = createContext("");

export function UserContextProvider(props) {
  const register = (mail, pwd) =>
    createUserWithEmailAndPassword(auth, mail, pwd);
  const login = (mail, pwd) => {
    signInWithEmailAndPassword(auth, mail, pwd);
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    return () => {
      onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser);
        currentUser ? console.log(currentUser) : console.log("Disconnected");
        setLoadingData(false);
      });
    };
  }, []);

  return (
    <userContext.Provider value={{ register, login, currentUser }} {...props} />
  );
}

// export const useAuth = () => useContext(userContext);
