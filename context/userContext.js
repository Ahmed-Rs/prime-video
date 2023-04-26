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
// Méthode alternative, mais préférence pour le await ci-bas
// .then((res) => {
//   const newUser = res?.user;
//   updateProfile(newUser, { displayName: updatedName });
//   console.log("newUser =>", newUser);
// });
export function UserContextProvider(props) {
  const register = async (mail, pwd, updatedName) => {
    const registerResult = await createUserWithEmailAndPassword(
      auth,
      mail,
      pwd
    );
    await updateProfile(auth.currentUser, { displayName: updatedName }).catch(
      (err) => console.log(err)
    );
    return registerResult;
  };

  const login = async (mail, pwd) => {
    const loginResult = await signInWithEmailAndPassword(auth, mail, pwd);
    return loginResult;
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
