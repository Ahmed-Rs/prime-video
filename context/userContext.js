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
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export const userContext = createContext(""); // Très important de mettre une value empty au lieu de null ou undefined, sinon bug.

export function UserContextProvider(props) {
  const register = async (mail, pwd, updatedName) => {
    await createUserWithEmailAndPassword(auth, mail, pwd);
    // Méthode alternative, mais préférence pour le await ci-bas
    // .then((res) => {
    //   const newUser = res?.user;
    //   updateProfile(newUser, { displayName: updatedName });
    //   console.log("newUser =>", newUser);
    // });
    await updateProfile(auth.currentUser, { displayName: "myName" }).catch(
      (err) => console.log(err)
    );
  };

  const login = (mail, pwd) => {
    signInWithEmailAndPassword(auth, mail, pwd);
  };
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
      currentUser ? console.log(currentUser) : console.log("Disconnected");
      setLoadingData(false);
    });
  }, []);

  return (
    <userContext.Provider value={{ register, login, currentUser }} {...props}>
      {!loadingData && props.children}
    </userContext.Provider>
  );
}

// export const useAuth = () => useContext(userContext);
